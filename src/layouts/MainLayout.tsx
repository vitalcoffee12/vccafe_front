import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";

import "./MainLayout.css";

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
          <div className="item-left">
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div> <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
            <div>asdlfkaldksjflkajsdf</div>
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
            <button>signIn</button>
          </div>
        </div>
      </div>
    </>
  );
}
