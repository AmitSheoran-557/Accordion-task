import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const handleChange = () => {
        setCount(count+1)
    }

  return (
    <div>
        <button onClick={() => handleChange()}>increament {count}</button>
    </div>
  )
}

export default Count