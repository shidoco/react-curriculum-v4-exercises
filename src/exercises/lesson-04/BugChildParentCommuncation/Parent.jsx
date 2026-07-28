import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

//Using the increment function as a callback, I passed it from the parent to the child using the onIncrement prop. Now the connection between the parent and child exists and the child calls that function when the button is pressed. I changed the count state to use an arrow function so that the state updates safely.
