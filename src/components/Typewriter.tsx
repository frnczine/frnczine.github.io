import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 30 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  const isTyping = currentIndex < text.length;

  return (
    <span>
      {displayedText}
      {isTyping && (
        <span
          style={{
            borderRight: '2px solid var(--accent-light)',
            animation: 'blink 1s step-end infinite',
            marginLeft: '2px',
          }}
        />
      )}
    </span>
  );
};

export default Typewriter;
