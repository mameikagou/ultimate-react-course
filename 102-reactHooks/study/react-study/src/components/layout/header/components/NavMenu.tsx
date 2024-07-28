// 这个必须要被<BrowserRouter>或<HashRouter>包裹, 否则报错; 
// import { NavLink } from "react-router-dom";

import { ReactNode } from "react";


const navMenu = [
  {
    label: "练习",
    path: "/problems",
  },
  {
    label: "题单",
    path: "/problem_lists",
  },
  {
    label: "MARIO广场",
    path: "/square",
  },
  {
    label: "学习中心",
    path: "/learning",
  },
  {
    label: "比赛大厅",
    path: "/march",
  },
  {
    label: "我的团队",
    path: "/teams",
  },
];
const NavLink = ({key,to,com}:IntrinsicAttributes & { key: string | number; to: string; com: ReactNode; })=>{
    console.log(to)
    return(<div key={key}>{com}</div>)
}

export const NavMenu = () => {
  return (
    <ul>
      {navMenu.map((i, index) => (
        <NavLink key={index} to={i.path}>
          {i.label}
        </NavLink>
      ))}
    </ul>
  );
};

