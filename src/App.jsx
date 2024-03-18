import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";

import "./global.css";

function App() {
  return (
    <>
      <h1>Select your React difficulty</h1>
      <MenuList />
      <DisplayDifficulty />
    </>
  );
}

export default App;
