import React from 'react'
import useToggle from './useToggle'

export default function Toggle() {
    const [value, toggleValue] = useToggle(false)
  return (
    <div>
        <h1>Custom hook 2:Toggle</h1>
        <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
      <hr />
    </div>
  )
}
