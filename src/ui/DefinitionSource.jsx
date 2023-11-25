function DefinitionSource() {
  return (
    <div className="flex flex-col gap-1">
      <p className="underline text-sm text-[var(--dark-grey)] font-normal">
        Source
      </p>
      <div className="flex items-center gap-3">
        <a
          href="https://en.wiktionary.org/wiki/keyboard"
          className="text-sm font-normal text-[var(--dark)]"
          target="_blank"
          rel="noreferrer"
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <a
          href="https://en.wiktionary.org/wiki/keyboard"
          className="text-sm font-normal text-[var(--dark)]"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default DefinitionSource;
