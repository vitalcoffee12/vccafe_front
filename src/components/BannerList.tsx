import { Link } from "react-router-dom";
import { Banner } from "../resources/Banners";

export default function BannerList(props: { banners: Banner[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {props.banners.map((v) => {
        return (
          <div
            key={"banner" + v.id}
            style={{
              width: "250px",
              height: "80px",
              border: "1px solid black",
              marginLeft: "10px",
              marginTop: "10px",
              overflow: "hidden",
            }}
          >
            <Link to={v.link}>
              <img src={v.src} alt="banner" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
