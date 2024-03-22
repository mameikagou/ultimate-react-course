import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";
import "@/css/index.css";
import AppIndex from "@pages/App";
import { Provider } from "react-redux";
import { store } from "@/store/index";

const LazyLoadComponent = lazy(() => import("@/pages/LazyLoadComponent"));
const Hooks = lazy(() => import("@/pages/Hooks"));
const SeclectFromMysql = lazy(() => import("@/pages/SelectFromMysql"));
const Login = lazy(() => import("@/pages/Login"));

const init = () => {
  useEffect;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppIndex />,
  },
  {
    path: "/LazyLoadComponent",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <LazyLoadComponent />
      </Suspense>
    ),
  },
  {
    path: "/Login",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/Hooks",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <Hooks />
      </Suspense>
    ),
  },
  {
    path: "/SelectFromMysql",
    element: (
      <Suspense fallback={<div>loading it ...</div>}>
        <SeclectFromMysql />
      </Suspense>
    ),
  },
]);

// const root=document.getElementById('root');

ReactDOM.createRoot(document.getElementById("root")!).render(
  // 感叹号, 非空断言符; 就是说, 确信它不会是null或undefined
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
