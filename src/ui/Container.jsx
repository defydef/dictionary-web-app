function Container({ children }) {
  return (
    <div className="p-6 flex flex-col gap-6 justify-center font-[Inconsolata] font-bold text-base">
      {children}
    </div>
  );
}

export default Container;
