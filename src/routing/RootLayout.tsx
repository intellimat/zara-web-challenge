import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { useIsFetching } from "@tanstack/react-query";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export default function RootLayout() {
  const isFetching = useIsFetching();
  return (
    <div>
      <Navbar />
      {isFetching > 0 && <ProgressBar />}
      <Outlet />
      <a className="MarvelAttribution" href="https://marvel.com">
        Data provided by Marvel. © 2025 MARVEL
      </a>
    </div>
  );
}
