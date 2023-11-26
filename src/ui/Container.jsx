function Container({ children, darkMode }) {
  return (
    <div
      className={`p-6 sm:px-10 sm:pt-12 pb-12 flex flex-col gap-6 sm:gap-10 justify-center font-[Inconsolata] font-bold text-base ${
        darkMode ? "bg-[var(--dark-bg)] text-white" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
