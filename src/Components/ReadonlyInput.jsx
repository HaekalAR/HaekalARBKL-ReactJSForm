const ReadonlyInput = () => {
  return (
    <div className="border border-gray-300 rounded-sm p-4 font-geist">
      <div className="pb-2">
        <h1 className="text-2xl font-bold">Readonly Input</h1>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label>Default Readonly Input</label>
          <input
            type="text"
            aria-label="Readonly input"
            value="This is a readonly input"
            className="border border-gray-300 bg-gray-100 text-gray-600 outline-none ring-0 rounded-sm w-full p-2"
          />
        </div>
        <div>
          <label>Another Readonly Input</label>
          <input
            type="text"
            aria-label="Readonly input"
            value="This is a readonly input"
            className="border border-gray-300 bg-gray-100 text-gray-600 outline-none ring-0 rounded-sm w-full p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default ReadonlyInput;
