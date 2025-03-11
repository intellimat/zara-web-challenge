import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Charachter from "../pages/Charachter/Charachter";
import RootLayout from "./RootLayout";
import FavouriteHeroes from "../pages/FavouriteHeroes/FavouriteHeroes";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/charachter">
          <Route path=":id" element={<Charachter />} />
        </Route>
        <Route path="/favouriteHeroes" element={<FavouriteHeroes />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
