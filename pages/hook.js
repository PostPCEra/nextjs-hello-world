import React, { useState } from 'react';

function hook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>value of count is: {count}</p>
    </div>
  );
}

export default hook
