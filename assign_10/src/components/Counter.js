import React, { useState } from 'react';

// Define a functional component named Counter
const Counter = () => {
  // Declare a state variable 'count' and a function 'setCount' to update it
  // Initialize 'count' with a value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the current value of 'count' */}
      <h1>Count: {count}</h1>
      
      {/* Button to increment the count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* Button to decrement the count by 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Export the Counter component to be used in other parts of the application
export default Counter;
