import React, { useContext } from 'react'
import {cont} from './App'

function Home() {

    const {counter , handleCounter} = useContext(cont)
  return (
    <>
     <p>{counter}</p>
     <button onClick={handleCounter}> Increment</button>
     </>
  )
}

export default Home