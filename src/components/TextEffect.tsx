import { useEffect, useRef, useState } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

const ScrollRevealTextEffect = ({ text, className }: ScrollRevealTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number;
    let lastProgress = -1;

    const tick = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        
        const startPoint = window.innerHeight * 0.92;
        const endPoint = window.innerHeight * 0.62;

        const raw = (startPoint - rect.bottom) / (startPoint - endPoint);
        const clamped = Math.min(1, Math.max(0, raw));

        if (Math.abs(clamped - lastProgress) > 0.001) {
          lastProgress = clamped;
          setProgress(clamped);
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const words = text.split(/(\s+)/);
  const totalWords = words.filter(word => word.trim() !== '').length;
  let wordIndex = 0;

  return (
    <p ref={textRef} className={`scroll-reveal-text ${className || ''}`}>
      {words.map((word, index) => {
        if (!word.trim()) {
          return <span key={index}>{word}</span>;
        }

        const wordStart = (wordIndex / totalWords) * 0.85;
        const wordEnd = wordStart + 0.15;
        const wordProgress = Math.min(1, Math.max(0, (progress - wordStart) / (wordEnd - wordStart)));
        wordIndex++;

        return (
          <span
            key={index}
            style={{ opacity: 0.25 + wordProgress * 0.75 }}
            className={wordProgress >= 1 ? 'revealed' : ''}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};

export default ScrollRevealTextEffect;
