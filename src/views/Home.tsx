import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      home Page
      <Link to={"/about"}>to about</Link>
    </div>
  );
}
