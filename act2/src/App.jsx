import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Elizalde's Group Counter</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '15px', textAlign: "center", t }}>
        Decrement
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: '15px' }}>
        Reset
      </button>
    </div>
  )
}

export default App