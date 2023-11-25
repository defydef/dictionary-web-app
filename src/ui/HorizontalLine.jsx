function HorizontalLine({ darkMode }) {
  return (
    <div
      className={`w-full h-[0.0625rem] ${
        darkMode ? "bg-[var(--line)]" : "bg-[var(--grey)]"
      } `}
    ></div>
  );
}

export default HorizontalLine;
