import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React.StrictMode is a tool for highlighting protential
// problems in an application; 
// It activates additional checks and warnings for its descendants.
// It will render twice in development mode.

