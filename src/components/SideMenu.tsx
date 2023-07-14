import { useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { Menu } from "../resources/Menu";
import { Color } from "../resources/Color";
import { useSelector } from "react-redux";

export default function SideMenu(props: { menuList: Menu[] }) {
  const user = useSelector((state: any) => state.user);
  const nav = useNavigate();
  const location = useLocation().pathname;

  return (
    <ul>
      {props.menuList.map((v, index) => {
        const icon = v.icon ?? "";

        return (
          <li key={index}>
            <div
              style={{
                display: "flex",
                alignContent: "baseline",
                margin: "12px",
                cursor: "pointer",
              }}
            >
              <Icon icon={icon} />
              <span style={{ marginLeft: "5px" }}>{v.label}</span>
            </div>
            <div
              style={{
                marginLeft: "20px",
                borderLeft: "1px solid #C0C0C0",
              }}
            >
              <ul>
                {v.children?.map((e) => {
                  let selector = false;
                  if (e.link === location) {
                    selector = true;
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
                        onClick={(c) => {
                          nav(e.link, { state: { name: user.name } });
                        }}
                      >
                        <Icon icon={e.icon} />
                        <span style={{ marginLeft: "5px" }}>{e.label}</span>
                        {selector && (
                          <Icon icon="arrow_left" color={Color.Main} />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
