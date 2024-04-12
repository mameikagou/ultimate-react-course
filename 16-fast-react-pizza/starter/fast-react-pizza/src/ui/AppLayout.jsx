
import { Outlet } from "react-router-dom";
import CartOverview from "../feature/cart/CartOverview";
import { Header } from "./Header";


export const AppLayout = () => {
    
  return (
    <>
      <Header></Header>
      <main>
        <h1>Content</h1>
        {/* 这里代表嵌套路由的子路由;  */}
         <Outlet />
      </main>
      <CartOverview />
    </>
  );
};
