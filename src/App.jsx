import Container from "./ui/Container";
import Navbar from "./ui/Navbar";
import SearchInput from "./ui/SearchInput";
import Word from "./ui/Word";

function App() {
  return (
    <Container>
      <Navbar />
      <SearchInput />
      <Word />
    </Container>
  );
}

export default App;
