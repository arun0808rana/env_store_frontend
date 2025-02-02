import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}
