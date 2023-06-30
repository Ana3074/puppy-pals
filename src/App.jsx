import { useState } from 'react'
import { puppyList } from './data.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(puppyList)
  return (
    <>
      <div>
        {
          puppyList.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }
      </div>

    </>
  )
}

export default App
