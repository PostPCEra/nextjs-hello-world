//import React from 'react'
import styled from 'styled-components'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// A great library for fuzzy filtering/sorting items
import matchSorter from 'match-sorter'
import makeData from '../rtable/makeData'

import React, { useState } from 'react';

function App2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const data = React.useMemo(() => makeData(10), [])

  return (
   <div>    
	        <p>value of count is: {count}</p>
	        <p>value of Len is ---------: {data.length}</p>
	        <button onClick={() => setCount(count + 1)}>	
	          Click me	
	        </button>	
    </div>
  );
}

export default App2