import React from 'react'
import TypingRace from './Components/TypingRace/TypingRace'
import Race from './Components/Race/Race';
import "./App.css"

const App = () => {
  return (
    <div className='game-wrapper'>
      <Race />
      <TypingRace />
    </div>
  )
}

export default App
