import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Definition from "./ui/Definition";
import DefinitionSource from "./ui/DefinitionSource";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";
import { useDictionary } from "./hooks/useDictionary";
import { DictionaryProvider } from "./contexts/DictionaryContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("font-[Inter]");
  const { phonetic, getDictionary } = useDictionary();

  function getMeaning(word) {
    getDictionary(word);
  }

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
        <Definition type="noun" darkMode={darkMode} />
        <Definition type="verb" darkMode={darkMode} />
        <HorizontalLine darkMode={darkMode} />
        <DefinitionSource darkMode={darkMode} />
      </DictionaryProvider>
    </Container>
  );
}

export default App;
