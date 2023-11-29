import { useState } from "react";
import Container from "./ui/Container";
import Definition from "./ui/Definition";
import DefinitionSource from "./ui/DefinitionSource";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";
import { DictionaryProvider } from "./contexts/DictionaryContext";
import Definitions from "./ui/Definitions";
import DefinitionSources from "./ui/DefinitionSources";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("font-[Inter]");

  return (
    <Container darkMode={darkMode} fontFamily={fontFamily}>
      <Navbar
        onToggleDarkMode={setDarkMode}
        darkMode={darkMode}
        onSelectFontFamily={setFontFamily}
        fontFamily={fontFamily}
      />
      <DictionaryProvider>
        <SearchInput darkMode={darkMode} />
        <Word darkMode={darkMode} />
        <Definitions darkMode={darkMode} />
        <HorizontalLine darkMode={darkMode} />
        <DefinitionSources darkMode={darkMode} />
      </DictionaryProvider>
    </Container>
  );
}

export default App;
