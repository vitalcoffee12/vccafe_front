import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import TopMenu from "../components/TopMenu";
import { topMenu } from "../resources/Menu";
import { Color } from "../resources/Color";

import BannerList from "../components/BannerList";
import { Banners } from "../resources/Banners";
import { useSelector } from "react-redux";

export default function MainLayout() {
  const user = useSelector((state: any) => state.user);
  return (
    <>
      <div className="background">
        {/* 탑 로고*/}
        <div
          className="item-navbar"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Logo />
        </div>
        {/* 메인 컨테이너*/}
        <div className="continer">
          <div className="item-header">
            {/* 메뉴 */}

            <div style={{ marginLeft: "460px" }}>
              <TopMenu menuList={topMenu} />
            </div>
            {/* 로그인/계정 */}
            <div
              style={{
                marginLeft: "auto",
                marginRight: "15px",
              }}
            >
              {user.id !== "" && (
                <Link to={"/mypage"}>
                  <button
                    style={{
                      padding: "8px",
                      borderRadius: "20px",
                      display: "inline-flex",
                      alignContent: "center",
                      color: Color.Main,
                    }}
                  >
                    <span style={{ marginRight: "4px" }}>{user.name}님</span>
                    <Icon icon="person" color={Color.Main} />
                  </button>
                </Link>
              )}
              {user.id === "" && (
                <Link to={"/signin"}>
                  <button
                    style={{
                      padding: "8px",
                      borderRadius: "20px",
                      display: "inline-flex",
                      alignContent: "center",
                      color: Color.Main,
                    }}
                  >
                    <span style={{ marginRight: "4px" }}>로그인</span>
                    <Icon icon="person" color={Color.Main} />
                  </button>
                </Link>
              )}
            </div>
          </div>
          {/* 메인 아울렛*/}
          <div className="item-main">
            <Outlet />
          </div>
          {/* 푸터 */}
          <div className="item-footer">
            <BannerList banners={Banners} />
          </div>
        </div>
      </div>
    </>
  );
}
