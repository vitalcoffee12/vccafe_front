import { Link } from "react-router-dom";
import Icon from "./Icon";
import { Menu } from "../resources/Menu";
import { Color } from "../resources/Color";

export default function SideMenu(props: { menuList: Menu[] }) {
  return (
    <>
      {props.menuList.map((v, index) => {
        return (
          <span key={v.label}>
            <Link
              to={v.link}
              style={{
                display: "inline-flex",
                alignContent: "center",
                marginRight: "15px",
                color: Color.Main,
                borderLeft: "3px solid white",
                alignItems: "center",
                backgroundColor: "#FFFFFF54",
                padding: "4px",
                paddingBottom: "6px",
                paddingRight: "8px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  marginRight: "5px",
                }}
              >
                <Icon icon={v.icon} color={Color.Main} />
              </span>
              <span>{v.label}</span>
            </Link>
          </span>
        );
      })}
    </>
  );
}
