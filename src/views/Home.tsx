import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ color: "#492749", margin: "30px 15px 15px 30px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
        VC CAFE에 오신 것을 환영합니다!
      </h1>
      <span>
        로그인을 하시면 소개, 기능, 갤러리의 메뉴를 확인할 수 있습니다.
      </span>
      <br></br>
      <br></br>
      <br></br>
      <span
        style={{
          borderRadius: "15px",
          background: "white",
          padding: "3px 10px 3px 10px",
        }}
      >
        테스트 계정 정보{" "}
      </span>
      <br></br>
      <br></br>
      <span>id : admin </span>
      <br></br>
      <span>password : admin </span>
    </div>
  );
}
