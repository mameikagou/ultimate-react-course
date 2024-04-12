import React,{Suspense,lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'


const HomePage = lazy(()=>import('@pages/Homepage.jsx'))
const Product = lazy(()=>import('@pages/Product.jsx'))
const Pricing = lazy(()=>import('@pages/Pricing.jsx'))
const NotFound = lazy(()=>import('@pages/PageNotFound.jsx'))
const AppLayout = lazy(()=>import('@pages/AppLayout.jsx'))


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[

    ]
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
    path: "/app",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <AppLayout />
      </Suspense>
    ),
    childrens:[
      {
        path: "/app/",
        element: <div>喵喵喵</div>
      },
      {
        path: "/app/cities",
        element: (
          <Suspense fallback={<div>loading it ...</div>}>
            <CityList />
            {/* <div>cities</div> */}
          </Suspense>
        )
      },
      {
        path: "/app/countries",
        element: (
          <Suspense fallback={<div>loading it ...</div>}>
            <CountryList/>
            {/* <div>countries</div> */}
          </Suspense>
        )
      },
      {
        path: "/app/form",
        element: (
          <Suspense fallback={<div>loading it ...</div>}>
            {/* <Form/> */}
            <div>form</div>
          </Suspense>
        )
      }
    ]
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
     {/* <App/> */}
  </React.StrictMode>,
)
