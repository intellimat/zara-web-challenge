import { useEffect } from "react";
import "./App.css";
import RoutesWrapper from "./routing/RoutesWrapper";
import { getAllCharacters } from "./services/characterService";

function App() {
  useEffect(() => {
    getAllCharacters();
  }, []);
  return <RoutesWrapper />;
}

export default App;
