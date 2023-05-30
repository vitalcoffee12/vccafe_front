import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <TopLogo />
      <div className="scroll-box">
        <Outlet />
      </div>
    </>
  );
}

function TopLogo() {
  return (
    <div>
      <span>logo</span>
    </div>
  );
}
