import React, { useState} from 'react';

// can't change props if we used that
// useState returns an array with two values: what the piece of state is,
// a function to change it 
// ex: const [mood, setMood] = useState("happy");
const Counter = () => {
    const [count, setCount] = useState(99);
    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </>
    )
}

export default Counter;