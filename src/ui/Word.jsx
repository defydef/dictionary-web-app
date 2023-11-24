function Word() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col justify-between gap-4">
        <p className="text-[var(--dark)] text-[2rem] font-bold">keyboard</p>
        <p className="text-[var(--purple)] text-lg leading-6 font-normal font-[Inter]">
          /ˈkiːbɔːd/
        </p>
      </div>
      <div className="p-2">
        <img src="./images/icon-play.svg" alt="play button" width="50px" />
      </div>
    </section>
  );
}

export default Word;
