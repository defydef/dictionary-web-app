import { useState } from "react";
import Container from "./ui/Container";
import Definition from "./ui/Definition";
import DefinitionSource from "./ui/DefinitionSource";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("font-[Inconsolata]");
  return (
    <Container darkMode={darkMode} fontFamily={fontFamily}>
      <Navbar
        onToggleDarkMode={setDarkMode}
        darkMode={darkMode}
        onSelectFontFamily={setFontFamily}
        fontFamily={fontFamily}
      />
      <SearchInput darkMode={darkMode} />
      <Word darkMode={darkMode} />
      <Definition type="noun" darkMode={darkMode} />
      <Definition type="verb" darkMode={darkMode} />
      <HorizontalLine darkMode={darkMode} />
      <DefinitionSource darkMode={darkMode} />
    </Container>
  );
}

export default App;
