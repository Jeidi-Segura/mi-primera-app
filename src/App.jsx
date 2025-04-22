import { useState } from 'react'
import senaLogo from '/sena.png'
import './App.css'
import Saludo from './components/Saludo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">
          <img src={senaLogo} className="logo" alt="Vite logo" />
        </a>
  
      </div>

      

      <h1>Mi primera APP</h1> {count}
      <div>
        {/* Usa el componente como una etiqueta HTML */}
        <Saludo nombre="Jeidi" />
      </div>  
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is
          </button>
      </div>
      <div className="card1">
          
          <button onClick={() => setCount((count) => count - 1)}>
            decrement 
          </button>
      </div>
   
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )
}
export default App
