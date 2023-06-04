import { Color } from "../resources/Color";

export default function Error() {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          fontSize: "42px",
          color: Color.Main,
        }}
      >
        <div style={{ marginTop: "65px" }}>
          404 Not Found <p>잘못된 페이지 경로입니다</p>
        </div>
      </div>
    </>
  );
}
