'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function TypewriterText({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]); // No state-setting outside the asynchronous interval callback

  return (
    <span className="font-mono text-xl md:text-xl font-bold text-white">
      {displayedText}
      <span className="animate-[pulse_0.8s_infinite] ml-0.5 border-r-2 border-white h-5 inline-block" />
    </span>
  );
}
