import { iBoardItem } from "../resources/Boards";
import { Color } from "../resources/Color";
import "./BoardItem.css";

export default function BoardItem(props: { item: iBoardItem }) {
  return (
    <>
      <div
        style={{
          background: "radial-gradient(#FFFFFF11, #FFFFFF27)",
          boxShadow: "1px 1px 1px 1px #5A5A5A3B",
          width: "1000px",
          minHeight: "200px",
          marginLeft: "auto",
          marginRight: "10px",
          marginBottom: "50px",
          borderRadius: "5px",
        }}
      >
        {/** title */}
        <div
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "15px",
            fontSize: "24px",
            borderLeft: "4px solid white",
            color: Color.Main,
          }}
        >
          {props.item.title}
        </div>
        {/** contents */}
        <div
          style={{
            paddingTop: "15px",
            paddingBottom: "30px",
            paddingLeft: "15px",
            color: Color.Main,
          }}
          dangerouslySetInnerHTML={{ __html: props.item.content }}
        ></div>
      </div>
    </>
  );
}
