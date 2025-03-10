import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Charachter from "../pages/Charachter";
import RootLayout from "./RootLayout";

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/charachter">
          <Route path=":id" element={<Charachter />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
