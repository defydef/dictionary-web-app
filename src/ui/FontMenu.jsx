import { useState } from "react";

function FontMenu({ darkMode }) {
  const menuListStyle = "cursor-pointer hover:text-[var(--purple)]";
  const [showFontMenu, setShowFontMenu] = useState(false);
  return (
    <>
      <div
        className="text-[0.875rem] sm:text-[1.125rem] font-bold leading-6"
        onClick={() => setShowFontMenu(!showFontMenu)}
      >
        Mono
        <div
          className={`${showFontMenu ? "block" : "hidden"} ${
            darkMode
              ? "bg-[var(--input-bg-dark)] shadow-[0px_5px_30px_0px_var(--purple)]"
              : "bg-white shadow-[0px_5px_30px_0px_var(--font-menu-shadow)]"
          } fixed w-[8rem] sm:w-[11rem] h-[9rem] sm:h-[10rem] top-[calc(1.5rem+38px)] sm:top-[calc(3rem+45px)] -ml-16 sm:-ml-24 rounded-2xl pt-6 px-5 flex flex-col gap-3 cursor-pointer sm:text-lg z-20`}
        >
          <div className={`font-[Inter] ${menuListStyle}`}>
            <p onClick={() => console.log("test")}>Sans Serif</p>
          </div>
          <div className={`font-[Lora] ${menuListStyle}`}>
            <p>Serif</p>
          </div>
          <div className={`font-[Lora] ${menuListStyle}`}>
            <p>Mono</p>
          </div>
          {/* <li className={`hover:text-[var(--purple)]`}>Mono</li> */}
        </div>
      </div>
      <span
        className="cursor-pointer"
        onClick={() => setShowFontMenu(!showFontMenu)}
      >
        <img src="./images/icon-arrow-down.svg" alt="dropdown arrow" />
      </span>
    </>
  );
}

export default FontMenu;
