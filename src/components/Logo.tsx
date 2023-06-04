import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <span style={{ color: "white", fontWeight: "700", fontSize: "43px" }}>
        먼지✨유니버스
      </span>
    </Link>
  );
}
