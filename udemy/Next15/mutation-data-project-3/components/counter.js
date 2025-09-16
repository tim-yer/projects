'use client'

import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount(prevState => prevState + 1);
    }

    return (
        <>
            <div>
                {count}
            </div>
            <button onClick={clickHandler}>Increment</button>
        </>
    )
}

export default Counter;