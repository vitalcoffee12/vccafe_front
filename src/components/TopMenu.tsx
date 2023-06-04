import { Link } from "react-router-dom";
import Icon from "./Icon";
import { Menu } from "../resources/Menu";
import { Color } from "../resources/Color";

export default function TopMenu(props: { menuList: Menu[] }) {
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
              }}
            >
              <span style={{ marginRight: "5px" }}>
                <Icon icon={v.icon} color={Color.Main} />
              </span>
              <span>{v.label}</span>
            </Link>
            {props.menuList.length - 1 !== index && (
              <span style={{ color: Color.Main, marginRight: "15px" }}>˚</span>
            )}
          </span>
        );
      })}
    </>
  );
}
