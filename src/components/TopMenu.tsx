import { Link } from "react-router-dom";
import Icon from "./Icon";
import { Menu } from "../resources/TopMenu";

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
              }}
            >
              <span style={{ marginRight: "5px" }}>
                <Icon icon={v.icon} color="#432664" />
              </span>
              <span>{v.label}</span>
            </Link>
            {props.menuList.length - 1 !== index && (
              <span style={{ color: "white", marginRight: "15px" }}>º</span>
            )}
          </span>
        );
      })}
    </>
  );
}
