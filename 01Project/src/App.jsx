import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count+1)}>Click Me</button>
      
      {count > 5 ?
      (<h2>HEYYY! <button onClick={() => setCount(0)}>STOP & RESET</button>  {count}</h2>) :
      count > 0 ?
      (<h2>Why teasing me? Let me sleep... {count}</h2>) :
      (<h2>To start, click the above button!</h2>)
      }

      <p>Oh! {count}</p>
    </>
  )
}

export default App
