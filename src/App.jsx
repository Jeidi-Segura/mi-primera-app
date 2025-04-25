import { useState } from 'react'
import senaLogo from '/sena.png'
import './App.css'
import Saludo from './components/Saludo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=' text-white flex flex-col items-center justify-center p-10'>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">
          <img src={senaLogo} className='w-90 mb-6' alt="SENA logo" />
        </a>
      </div>
      <h1 className='font-mono && font-bold && text-6xl && text-center && text-white'>Mi primera APP</h1> 
      <div className='text-white text-center text-5xl pt-24'>
        {/* Usa el componente como una etiqueta HTML */}
        <Saludo nombre="Jeidi" /> 
      </div> 
      <div className='text-white text-center text-5xl pt-15'>{count} </div>

      <div className="pt-12 text-center">
          <button className='border-4 border-purple-500 && rounded-xl && outline-offset-4 text-white text-center text-5xl '  onClick={() => setCount((count) => count + 1)}>
            count is
          </button>
      </div>
      <div className="pt-12 text-center">
          
          <button className='border-4 border-purple-500 && rounded-xl && outline-offset-4 text-white text-center text-5xl' onClick={() => setCount((count) => count - 1)}>
            decrement 
          </button>
      </div>
   
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs text-white text-center text-4xl pt-52">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )
}
export default App
