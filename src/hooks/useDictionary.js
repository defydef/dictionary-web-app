import { useEffect, useState } from "react";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function useDictionary(word) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchedWord, setSearchedWord] = useState("keyboard");
  const [phonetic, setPhonetic] = useState("");
  const [phonetics, setPhonetics] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [sourceUrls, setSourceUrls] = useState([]);
  async function getDictionary(word) {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}${word}`);
      if (!res.ok) throw Error();
      const data = await res.json();
      const {
        word: searchedWord,
        phonetic,
        phonetics,
        meanings,
        sourceUrls,
      } = data[0];
      setSearchedWord(data[0].word);
      setPhonetic("test");
      setPhonetics(phonetics);
      setMeanings(meanings);
      setSourceUrls(sourceUrls);
      setIsLoading(false);
      console.log(data[0]);
      console.log(phonetic, searchedWord, phonetics);
    } catch {
      throw Error("Failed to get dictionary result");
    }
  }

  return {
    isLoading,
    searchedWord,
    phonetic,
    phonetics,
    meanings,
    sourceUrls,
    getDictionary,
  };
}
