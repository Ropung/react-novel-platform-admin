const HomePage = () => {
  return (
    <main className="w-full flex flex-col gap-2">
      <section className="w-full h-80 flex flex-row gap-4">
        <div className="w-full border border-gray-200 bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold">어떤거 할까1</h1>
        </div>
        <div className="w-full border border-gray-200 bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold">어떤거 할까2</h1>
        </div>
      </section>
      <section className="w-full h-80 flex flex-row gap-4">
        <div className="w-full border border-gray-200 bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold">어떤거 할까3</h1>
        </div>
        <div className="w-full border border-gray-200 bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold">어떤거 할까4</h1>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
