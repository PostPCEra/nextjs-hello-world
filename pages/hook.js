import React, { useState } from 'react';
 
const hookexample = () => {
  return <Headline />;
};
 
const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
  
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};
 
export default hookexample;
