import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="backdrop-blur-sm h-full" >
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
