import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="background">
        <div className="item-header">
          <Logo />
          <Link to={"/signin"}>singin</Link>
        </div>
        <div className="continer">
          <div className="item-header">
            <button>&lt;</button>
          </div>
          <div className="item-main">
            <Outlet />
          </div>
          <div className="item-footer">
            <span>footer</span>
          </div>
        </div>
      </div>
    </>
  );
}
