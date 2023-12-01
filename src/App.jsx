import { useEffect, useState } from "react";
import Container from "./ui/Container";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";
import { useDictionary } from "./contexts/DictionaryContext";
import Definitions from "./ui/Definitions";
import DefinitionSources from "./ui/DefinitionSources";
import Error from "./ui/Error";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialColorScheme);
  const [fontFamily, setFontFamily] = useState("font-[Inconsolata]");
  const { error, errorType } = useDictionary();

  // Function to get the initial color scheme based on user preference
  function getInitialColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  }

  // Function to handle changes in the color scheme
  function handleColorSchemeChange(event) {
    setDarkMode(event.matches ? true : false);
  }

  useEffect(() => {
    // Create a MediaQueryList object
    const colorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Attach the event listener for the 'change' event
    colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);

    // Call the handler initially to set the initial state
    handleColorSchemeChange(colorSchemeMediaQuery);

    // Clean up the listener when the component unmounts
    return () => {
      colorSchemeMediaQuery.removeEventListener(
        "change",
        handleColorSchemeChange
      );
    };
  }, []);

  return (
    <Container darkMode={darkMode} fontFamily={fontFamily}>
      <Navbar
        onToggleDarkMode={setDarkMode}
        darkMode={darkMode}
        onSelectFontFamily={setFontFamily}
        fontFamily={fontFamily}
      />
      <SearchInput darkMode={darkMode} />
      {error ? (
        <Error type={errorType} />
      ) : (
        <>
          <Word darkMode={darkMode} />
          <Definitions darkMode={darkMode} />
          <HorizontalLine darkMode={darkMode} />
          <DefinitionSources darkMode={darkMode} />
        </>
      )}
    </Container>
  );
}

export default App;
