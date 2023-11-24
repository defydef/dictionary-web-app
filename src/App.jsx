import Container from "./ui/Container";
import Definition from "./ui/Definition";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";

function App() {
  return (
    <Container>
      <Navbar />
      <SearchInput />
      <Word />
      <Definition />
    </Container>
  );
}

export default App;
