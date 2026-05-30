import { useState } from 'react'
import StartPage from './components/StartPage'
import BookNavigator from './components/BookNavigator'
import './App.css'

export default function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="app-root">
      {!started
        ? <StartPage onStart={() => setStarted(true)} />
        : <BookNavigator />
      }
    </div>
  )
}