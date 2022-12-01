import './App.scss'
import Image from './assets/images/placeholder.jpg'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <h1>App wow {process.env.NAME}</h1>
      <p>theme value is {theme}</p>
      <button onClick={toggleTheme}>toggle theme</button>
      <img src={Image} />
    </>
  )
}

export default App
