import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Outlet />
    </div>
  );
}
