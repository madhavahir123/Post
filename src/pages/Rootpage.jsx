import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";

export default function Rootpage() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
