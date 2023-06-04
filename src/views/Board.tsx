import { useParams } from "react-router-dom";
import Icon from "../components/Icon";
import { Color } from "../resources/Color";
import { useEffect, useState } from "react";
import { axiosManager } from "../axios";

export interface iBoardInfo {
  title: string;
  items: iBoardItem[];
}
export interface iBoardItem {
  id: number;
  title: string;
  content: string;
}

export default function Board(props: {}) {
  const boardId = useParams().id;
  console.log(boardId);

  const [boardInfo, setBoardInfo] = useState<iBoardInfo>();

  const getBoard = async () => {
    const result = await axiosManager.get(`/board/${boardId}`);
    console.log(result);
  };

  useEffect(() => {
    getBoard();
  }, []);
  return (
    <>
      {/** title */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          textAlign: "center",
          marginTop: "15px",
          marginBottom: "50px",
          fontSize: "24px",
          color: Color.Main,
          background: "white",
          padding: "15px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      ></div>
      {/** items */}
      {/* <div style={{ marginTop: "25px" }}>
        {props.boards.map((v) => {
          return (
            <div key={v.id} id={v.id.toString()}>
              <BoardItem item={v} />
            </div>
          );
        })}
      </div> */}
      <button
        style={{
          position: "fixed",
          cursor: "pointer",
          borderRadius: "40px",
          backgroundColor: "white",
          padding: "5px",
          right: "30px",
          bottom: "150px",
          boxShadow: "1px 1px 1px 1px #5A5A5A3B",
        }}
      >
        <span>
          <Icon icon="add" size={32} color={Color.Main} />
        </span>
      </button>
    </>
  );
}
