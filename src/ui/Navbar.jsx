import FontMenu from "./FontMenu";

function Navbar({ darkMode, onToggleDarkMode }) {
  function toggleDarkMode() {
    onToggleDarkMode(!darkMode);
  }
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <img src="./images/logo.svg" alt="Dictionary logo" />
        </li>
        <li className="flex gap-3 sm:gap-5 justify-between items-center">
          <FontMenu darkMode={darkMode} />
          <div className="w-[0.0625rem] h-8 bg-[var(--grey)]"></div>
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span className=" cursor-pointer">
            <img
              src={
                darkMode
                  ? "./images/icon-moon-purple.svg"
                  : "./images/icon-moon.svg"
              }
              alt="dark mode toggle"
            />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
