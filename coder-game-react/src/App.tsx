import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Main from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main />
  )
}

export default App
