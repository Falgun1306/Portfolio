import { useState, useEffect } from 'react';

export default function TypingHeading({ titles = [], typingSpeed = 80, deletingSpeed = 45, pauseTime = 1600 }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!titles.length) return;

    const fullText = titles[currentTitleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="inline-flex items-center min-h-[2rem] sm:min-h-[2.5rem]">
      <span className="text-lg sm:text-xl md:text-2xl font-semibold gradient-text">
        {displayedText}
      </span>
      <span className="inline-block w-[2px] h-5 sm:h-6 md:h-7 ml-1 bg-cyan-400 animate-blink" />
    </div>
  );
}
