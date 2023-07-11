import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <>
      <div className="background">
        <div className="item-header">
          <Logo />
        </div>
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
          <div className="item-main">
            <Outlet />
          </div>
          <div className="item-footer">
            <span>Made by 💜 DustyMunji</span>
          </div>
          <div className="item-top">
            <button>
              <Link to={"/signin"}>singin</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
