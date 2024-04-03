import { useState,lazy } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'

const HomePage = lazy(()=>import('@pages/Homepage.jsx'))
const Product = lazy(()=>import('@pages/Product.jsx'))
const Pricing = lazy(()=>import('@pages/Pricing.jsx'))
const NotFound = lazy(()=>import('@pages/PageNotFound.jsx'))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router> */}
    </>
  )
}

export default App
