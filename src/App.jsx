import { useState } from 'react'
import './App.css'
import SignIn from './components/signin'
import { ClassNames } from '@emotion/react'

function App() {

  return (
    <div className="main">
      <SignIn className='shadow-md'/>
    </div>
  )
}

export default App
