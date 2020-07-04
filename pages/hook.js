import React, { useState } from 'react';

function hook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
   <div>    
	        <p>value of count is: {count}</p>
	        <p>value of Rs is: {React.version}</p>
	        <button onClick={() => setCount(count + 1)}>	
	          Click me	
	        </button>	
    </div>
  );
}

export default hook
