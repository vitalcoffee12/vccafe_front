import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";

import "./MainLayout.css";
import SideMenu from "../components/SideMenu";
import { getMenu } from "../resources/Menu";

export default function MainLayout() {
  const user = useSelector((state: any) => state.user);
  const nav = useNavigate();
  const location = useLocation().pathname.split("/");

  return (
    <>
      <div className="background">
        {/* 탑 로고*/}
        <div
          className="item-navbar"
          style={{
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={(e) => {
            nav("/");
          }}
        >
          <Logo />
        </div>
        {/* 메인 컨테이너*/}
        <div className="continer">
          <div className="item-left">
            <SideMenu menuList={getMenu(location[1] ?? "")} />
          </div>
          {/* 메인 아울렛*/}
          <div className="item-main">
            <Outlet />
          </div>
          {/* 푸터 */}
          <div className="item-footer">
            <span>Made by 💜 DustyMunji</span>
          </div>
          <div className="item-top">
            <div className="inner">
              {user.name === "" && (
                <button
                  onClick={(e) => {
                    nav("/login");
                  }}
                >
                  로그인
                </button>
              )}
              {user.name !== "" && (
                <button
                  onClick={(e) => {
                    nav("/user/account");
                  }}
                >
                  {user.nickname} 님
                </button>
              )}
            </div>
            <div className="notice"></div>
          </div>
        </div>
      </div>
    </>
  );
}
