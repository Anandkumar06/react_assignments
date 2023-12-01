import React, { useState } from 'react'
import useTimeout from './useTimeout'

export default function Timeout() {
    const [count, setCount] = useState(10)
  const { clear, reset } = useTimeout(() => setCount(0), 1000)
  return (
    <div>
        <h1>Custom Hook 3:Timeout</h1>
        <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
      <hr />
    </div>
  )
}