function SearchInput() {
  return (
    <div className="grid grid-cols-8 grid-rows-1">
      <div className="active:border border-solid border-[var(--purple)] bg-[var(--light-grey-2)] row-start-1 col-start-1 col-span-full h-12 rounded-2xl pl-5 grid grid-cols-8 input-parent">
        <input
          type="text"
          className=" bg-transparent row-start-1 col-start-1 col-span-7 z-10 pr-3 focus:outline-none"
        />
      </div>

      <span className="col-start-8 col-span-1 row-start-1 my-auto z-10 cursor-pointer">
        <img src="./images/icon-search.svg" />
      </span>
    </div>
  );
}

export default SearchInput;
