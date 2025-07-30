import React, { useRef } from 'react';
import  './MenuBar.css';

// Main MenuBar component
const MenuBar = () => {
  // Array of game categories with icon (emoji) and label
  const categories = [
    { icon: '🔥', label: 'Hot Games' },
    { icon: '🎰', label: 'Slot' },
    { icon: '👩‍�', label: 'Live Casino' },
    { icon: '🎮', label: '7-11' },
    { icon: '🚀', label: 'Fast Game' },
    { icon: '🎲', label: 'Dice' },
    { icon: '🃏', label: 'Card Games' },
    { icon: '⚽', 'label': 'Sports' },
    { icon: '🎯', label: 'Arcade' },
    { icon: '💰', label: 'Jackpot' },
    { icon: '💎', label: 'Originals' },
  ];

  // Ref for the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Scroll by 200px to the left
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll by 200px to the right
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  };

  return (
    <>
     
      <div className="menu-bar-container">
        {/* Container for the horizontal scrollable section */}
        <div className="scroll-section-wrapper">
          {/* Left scroll arrow button */}
          <button
            onClick={scrollLeft}
            className="scroll-arrow-button left"
            aria-label="Scroll left"
          >
            {/* Left arrow icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable container for game categories */}
          <div
            ref={scrollContainerRef}
            className="categories-scroll-container"
            style={{ scrollSnapType: 'x mandatory' }} // Inline style for scroll snapping
          >
            {categories.map((category, index) => (
              // Individual category card
              <div
                key={index}
                className={`category-card ${index === 0 ? 'hot-games' : ''}`}
                style={{ scrollSnapAlign: 'start' }} // Inline style for scroll snapping
              >
                {/* Category icon (emoji) */}
                <span>{category.icon}</span>
                {/* Category label */}
                <span>{category.label}</span>
              </div>
            ))}
          </div>

          {/* Right scroll arrow button */}
          <button
            onClick={scrollRight}
            className="scroll-arrow-button right"
            aria-label="Scroll right"
          >
            {/* Right arrow icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
