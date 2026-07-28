import { useRef } from 'react';

// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const clickCountRef = useRef(0);
  const buttonRef = useRef(null);

  function handleClick() {
    clickCountRef.current += 1;

    if (buttonRef.current) {
      buttonRef.current.textContent = `${clickCountRef.current} Clicks`;
    }
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        {clickCountRef.current} Clicks
      </button>
    </div>
  );
}

// The UseRef hook is the correct one to use because it allows the variable to change without re-rendering. In order to show the new amount of clicks on the button without a re-render, I had to change the button text directly using a DOM ref.
