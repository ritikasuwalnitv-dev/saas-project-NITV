const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto flex min-h-[80vh] w-full max-w-4xl items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-cyan-950/20 backdrop-blur">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 ">
            Tailwind is active
          </p>
          <h1 className="text-4xl font-bold text-cyan-300  tracking-tight  sm:text-6xl">
            Hello World from Tailwind
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            If this page renders with spacing, color, and layout styles, your
            Tailwind setup is working.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
