import { useDictionary } from "../contexts/DictionaryContext";
import Definition from "./Definition";

function Definitions({ darkMode }) {
  const { meanings } = useDictionary();
  console.log(meanings);
  return meanings.map((m) => (
    <Definition
      key={m.partOfSpeech}
      darkMode={darkMode}
      type={m.partOfSpeech}
      definitions={m.definitions}
      synonyms={m.synonyms}
    />
  ));
}

export default Definitions;
