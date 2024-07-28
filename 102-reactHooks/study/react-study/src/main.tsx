// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// 注入windi css的样式
import "virtual:windi.css"; 
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> // 会导致额外的渲染
    <App />
  // </React.StrictMode>,
)
