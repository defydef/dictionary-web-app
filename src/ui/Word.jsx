import { useDictionary } from "../contexts/DictionaryContext";

function Word({ darkMode }) {
  const { searchedWord } = useDictionary();

  return (
    <section className="flex justify-between sm:mt-8 sm:mb-2">
      <div className="flex flex-col justify-between gap-4 sm:gap-8">
        <p
          className={`${
            darkMode ? "text-white" : ""
          } text-[var(--dark)] text-[2rem] sm:text-[4rem] font-bold`}
        >
          {searchedWord}
        </p>
        <p className="text-[var(--purple)] text-lg sm:text-2xl leading-6 font-normal font-[Inter]">
          {searchedWord}
        </p>
      </div>
      <div className="py-2 cursor-pointer">
        <img
          src="./images/icon-play.svg"
          alt="play button"
          className="w-[50px] sm:w-[4.6875rem]"
        />
      </div>
    </section>
  );
}

export default Word;
