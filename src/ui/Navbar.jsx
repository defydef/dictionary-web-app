function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <img src="./images/logo.svg" alt="Dictionary logo" />
        </li>
        <li className="flex gap-3 justify-between items-center">
          <p className="text-[0.875rem] font-bold leading-6">Mono</p>
          <span className=" cursor-pointer">
            <img src="./images/icon-arrow-down.svg" alt="dropdown arrow" />
          </span>
          <div className="w-[0.0625rem] h-8 bg-[var(--grey)]"></div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span className=" cursor-pointer">
            <img src="./images/icon-moon.svg" alt="dark mode toggle" />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;