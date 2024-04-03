import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

const HomePage = lazy(()=>import('@pages/Homepage.jsx'))
const Product = lazy(()=>import('@pages/Product.jsx'))
const Pricing = lazy(()=>import('@pages/Pricing.jsx'))
const NotFound = lazy(()=>import('@pages/PageNotFound.jsx'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <Product/>
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <Pricing/>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <NotFound/>
      </Suspense>
    ),
  },
])

    {/* <Router>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router> */}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
