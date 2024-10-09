const FilelInput = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-sm font-geist">
      <div>
        <h1 className="font-bold text-2xl pb-2">File Input</h1>
        <div>
          <form className="flex flex-col gap-2">
            <div>
              <label>Default Input File</label>
              <input
                type="file"
                accept="image/png/jpg/jpeg/webp"
                className="border border-gray-300 outline-none ring-0 rounded-sm w-full"
              />
            </div>
            <div>
              <label>Multiple Input File</label>
              <input
                type="file"
                multiple
                accept="image/png/jpg/jpeg/webp"
                className="border border-gray-300 outline-none ring-0 rounded-sm w-full"
              />
            </div>
            <div>
              <label>Disabled Input File</label>
              <input
                type="file"
                accept="image/png/jpg/jpeg/webp"
                className="border border-gray-300  outline-none ring-0 rounded-sm bg-gray-200 text-gray-400 w-full"
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilelInput;
