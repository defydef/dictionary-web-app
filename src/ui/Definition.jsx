import BulletPoint from "./BulletPoint";

function Definition({ type, darkMode }) {
  const listStyle = `font-normal text-[0.9375rem] sm:text-lg flex items-start gap-6 ${
    darkMode ? "text-white" : "text-[var(--dark)]"
  }`;
  const titleStyle = "text-base sm:text-xl text-[var(--dark-grey)] font-normal";

  return (
    <section className={`flex flex-col gap-6 ${darkMode && "text-white"}`}>
      <div className="flex justify-between items-center sm:gap-8">
        <p className="text-lg sm:text-2xl font-bold">{type}</p>
        <div
          className={`w-[70vw] sm:w-[85vw] h-[0.0625rem] ${
            darkMode ? "bg-[var(--line)]" : "bg-[var(--grey)]"
          } `}
        ></div>
      </div>
      <p className={`${titleStyle}`}>Meaning</p>
      <ul className="flex flex-col gap-4 sm:pr-20 md:pr-0 sm:pl-8">
        <li className={listStyle}>
          <p className="mt-[0.6rem]">
            <BulletPoint />
          </p>
          <p>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </p>
        </li>
        <li className={listStyle}>
          <p className="mt-[0.6rem]">
            <BulletPoint />
          </p>
          <p>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </p>
        </li>
        <li className={listStyle}>
          <p className="mt-[0.6rem]">
            <BulletPoint />
          </p>
          <p>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </p>
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <p className={titleStyle}>Synonyms</p>
        <p className="font-bold text-[var(--purple)] sm:text-xl">
          electronic keyboard
        </p>
      </div>
    </section>
  );
}

export default Definition;
