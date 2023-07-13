import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "./Icon";
import { Menu } from "../resources/Menu";
import { Color } from "../resources/Color";

export default function SideMenu(props: { menuList: Menu[] }) {
  return <>{MenuRecursion({ menuList: props.menuList })}</>;
}

function MenuRecursion(props: { menuList: Menu[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!props.menuList.length) {
    return <></>;
  }

  return (
    <ul>
      {props.menuList.map((v, index) => {
        const icon = v.icon ?? "";
        let listed = false;
        if (v.children && v.children.length > 0) {
          listed = true;
        }

        return (
          <li>
            <div
              style={{
                display: "flex",
                alignContent: "baseline",
                margin: "12px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                if (listed) {
                  setIsOpen(!isOpen);
                }
              }}
            >
              <Icon icon={icon} />
              <span style={{ marginLeft: "5px" }}>{v.label}</span>
              {listed && (
                <Icon icon={isOpen ? "arrow_drop_down" : "arrow_right"} />
              )}
            </div>
            <div
              style={{
                marginLeft: "20px",
                borderLeft: "1px solid #C0C0C0",
                display: isOpen ? "block" : "none",
              }}
            >
              {MenuRecursion({ menuList: v.children ?? [] })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
