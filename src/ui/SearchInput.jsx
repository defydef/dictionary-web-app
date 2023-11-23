function SearchInput() {
  return (
    <div className="grid grid-cols-8 grid-rows-1">
      <input
        type="text"
        className="bg-[var(--light-grey-2)] row-start-1 col-start-1 col-span-full h-12 rounded-2xl pl-5"
      />
      <img
        src="./images/icon-search.svg"
        className="col-start-8 col-span-1 row-start-1 my-auto"
      />
    </div>
  );
}

export default SearchInput;
