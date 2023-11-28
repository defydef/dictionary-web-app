import { useState } from "react";
import { useDictionary } from "../contexts/DictionaryContext";

function SearchInput({ darkMode }) {
  const { getDictionary } = useDictionary();
  const [word, setWord] = useState("");
  return (
    <div className="grid grid-cols-8 sm:grid-cols-12 grid-rows-1">
      <div
        className={`${
          darkMode
            ? "bg-[var(--input-bg-dark)] text-white"
            : "bg-[var(--light-grey-2)]"
        } active:border border-solid border-[var(--purple)] row-start-1 col-start-1 col-span-full h-12 rounded-2xl pl-5 grid grid-cols-8 input-parent`}
      >
        <input
          type="text"
          className="bg-transparent row-start-1 col-start-1 col-span-7 z-10 pr-3 md:pl-1 focus:outline-none"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>

      <span
        className="col-start-8 sm:col-start-12 sm:ml-5 col-span-1 row-start-1 my-auto z-10 cursor-pointer"
        onClick={() => getDictionary(word)}
      >
        <img src="./images/icon-search.svg" />
      </span>
    </div>
  );
}

export default SearchInput;
