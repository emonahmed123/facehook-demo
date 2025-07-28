import { Outlet } from "react-router-dom";
import Header from "../common/Header";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Main;
