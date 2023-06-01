import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import TopMenu from "../components/TopMenu";
import { topMenu } from "../resources/TopMenu";

export default function MainLayout() {
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
            {/* 홈 버튼*/}
            <Link to={"/"}>
              <button style={{ marginLeft: "12px" }}>
                <Icon icon="home" color="#432664" size={24} />
              </button>
            </Link>
            {/* 메뉴 */}
            <div style={{ marginLeft: "430px" }}>
              <TopMenu menuList={topMenu} />
            </div>
            {/* 로그인 버튼*/}
            <div style={{ marginLeft: "auto", marginRight: "15px" }}>
              <Link to="/signin">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    borderRadius: "15px",
                  }}
                >
                  <span style={{ marginLeft: "8px", marginRight: "4px" }}>
                    로그인
                  </span>
                  <Icon icon="person" color="#432664" size={24} />
                </button>
              </Link>
            </div>
          </div>
          {/* 메인 아울렛*/}
          <div className="item-main">
            <Outlet />
          </div>
          {/* 푸터 */}
          <div className="item-footer">
            <span>footer</span>
          </div>
        </div>
      </div>
    </>
  );
}
