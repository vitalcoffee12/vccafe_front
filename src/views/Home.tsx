import logo from "../resources/logo.png";

export default function Home() {
  return (
    <div
      style={{
        width: "1180px",
        border: "1px solid red",
        margin: "0 auto",
        marginTop: "10px",
        display: "grid",
        height: "calc(100vh - 360px)",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "repeat(12,1fr)",
        gap: "10px",
        backgroundImage: `url(${logo})`,
        backgroundSize: "50vw",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
