import { useState } from 'react'
import Foreground from './Components/Foreground'
import './App.css'

function App() {
  return (
    <>
     <div className=' relative z-0 bg-slate-500/55 w-full h-screen'>
        <h1 className='fixed  -translate-x-[50%] -translate-y-[50%]  text-[12vw] tracking-tighter leading-none font-semibold left-1/2 top-1/2 '>Docs.</h1>
        <Foreground/>
     </div>
    </>
  )
} 
  export default App
  