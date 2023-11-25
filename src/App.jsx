import Container from "./ui/Container";
import Definition from "./ui/Definition";
import DefinitionSource from "./ui/DefinitionSource";
import HorizontalLine from "./ui/HorizontalLine";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";

function App() {
  return (
    <Container>
      <Navbar />
      <SearchInput />
      <Word />
      <Definition type="noun" />
      <Definition type="verb" />
      <HorizontalLine />
      <DefinitionSource />
    </Container>
  );
}

export default App;
