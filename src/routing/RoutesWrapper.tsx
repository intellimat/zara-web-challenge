import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Character from "../pages/Character/Character";
import RootLayout from "./RootLayout";
import FavouriteCharacters from "../pages/FavouriteCharacter/FavouriteCharacter";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/character">
          <Route path=":id" element={<Character />} />
        </Route>
        <Route path="/favouriteCharacters" element={<FavouriteCharacters />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
