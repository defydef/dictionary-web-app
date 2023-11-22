function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <img src="./images/logo.svg" alt="Dictionary logo" />
        </li>
        <li>
          <p className="text-[0.875rem] font-bold leading-6">Mono</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
