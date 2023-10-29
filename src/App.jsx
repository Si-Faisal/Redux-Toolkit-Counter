import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'
import ReduxCounter from './Components/ReduxCounter'

function App() {


  return (
    <>
      <div>
        
        <Counter></Counter>
        <ReduxCounter></ReduxCounter>
        
      </div>
        
    </>
  )
}

export default App
