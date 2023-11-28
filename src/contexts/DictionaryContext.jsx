import { createContext, useCallback, useContext, useReducer } from "react";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const DictionaryContext = createContext();

function DictionaryProvider({ children }) {
  const initialState = {
    isLoading: false,
    searchedWord: "",
    phonetic: "",
    phonetics: [],
    meanings: [],
    sourceUrls: [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dictionary/get":
        return {
          ...state,
          searchedWord: action.payload.word,
        };
      default:
        throw new Error("Undefined action");
    }
  }
  const [
    { isLoading, searchedWord, phonetic, phonetics, meanings, sourceUrls },
    dispatch,
  ] = useReducer(reducer, initialState);

  const getDictionary = useCallback(
    async function getDictionary(word) {
      try {
        // setIsLoading(true);
        const res = await fetch(`${API_URL}${word}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        dispatch({
          type: "dictionary/get",
          payload: data[0],
        });
      } catch {
        throw Error("Failed to get dictionary result");
      }
    },
    []
    //   async function getCurrentCity(id) {
    //     if (Number(id) === currentCity.id) return;

    //     dispatch({
    //       type: "loading",
    //     });
    //     try {
    //       const res = await fetch(`${BASE_URL}/cities/${id}`);
    //       if (!res.ok) throw new Error();
    //       const data = await res.json();
    //       if (data.Response === "False") throw new Error();
    //       dispatch({
    //         type: "cities/currentCity",
    //         payload: data,
    //       });
    //     } catch {
    //       dispatch({
    //         type: "rejected",
    //         payload: "There was an error loading data",
    //       });
    //     }
    //   },
  );

  return (
    <DictionaryContext.Provider
      value={{
        isLoading,
        searchedWord,
        phonetic,
        phonetics,
        meanings,
        sourceUrls,
        getDictionary,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

function useDictionary() {
  const context = useContext(DictionaryContext);
  console.log(context);
  if (context === undefined) throw new Error("useDictionary is undefined ");
  return context;
}

export { DictionaryProvider, useDictionary };
