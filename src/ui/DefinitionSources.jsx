import { useDictionary } from "../contexts/DictionaryContext";
import DefinitionSource from "./DefinitionSource";

function DefinitionSources({ darkMode }) {
  const { sourceUrls } = useDictionary();
  return sourceUrls.map((source, index) => (
    <DefinitionSource key={index} darkMode={darkMode} sourceUrl={source} />
  ));
}

export default DefinitionSources;
