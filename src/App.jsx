import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='my-10 px-30'>
        <p className='text-6xl font-bold'>STORY STAKE</p>
      </div>
    </>
  )
}

export default App
