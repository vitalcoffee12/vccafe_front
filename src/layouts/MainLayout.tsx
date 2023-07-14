import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";

import "./MainLayout.css";
import SideMenu from "../components/SideMenu";
import { sideMenu } from "../resources/Menu";

export default function MainLayout() {
  const user = useSelector((state: any) => state.user);
  const nav = useNavigate();

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
            <SideMenu menuList={sideMenu} />
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
                    nav("/user");
                  }}
                >
                  {user.nickname} 님
                </button>
              )}
            </div>
            <div className="notice">
              <ul>
                <li>공지사항입니다1 notice</li>
                <li>공지사항입니다2 notice</li>
                <li>공지사항입니다3 notice</li>
                <li>공지사항입니다4 notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
