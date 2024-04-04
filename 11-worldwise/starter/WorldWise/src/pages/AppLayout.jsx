import AppNav from "../components/App.Nav";
// import Map from "../components/Map";
// import Sidebar from "../components/Sidebar";
// import User from "../components/User";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      {/* <Sidebar />
      <Map />
      <User /> */}
      <AppNav />
    </div>
  );
}

export default AppLayout;
