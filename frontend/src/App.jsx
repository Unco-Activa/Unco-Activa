import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="">
      <h1 className="bg-orange-400 text-black text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
