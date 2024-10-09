const InputGroup = () => {
  return (
    <div className="border border-gray-300 rounded-sm p-4 font-geist">
      <div>
        <h1 className="font-bold text-2xl">Input Group</h1>
      </div>
      <div className="flex flex-col gap-2 pt-2">
        {/* Input Group 01 */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <p className="bg-gray-100 border-r-[1px] border-gray-300 h-full w-fit flex items-center justify-center p-2 text-gray-600 rounded-l-md text-sm">
            @
          </p>
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full text-sm p-2 rounded-md outline-none"
          />
        </div>
        {/* Input Group 02 */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="User email"
            required
            className="w-full text-sm p-2 rounded-md outline-none"
          />
          <p className="bg-gray-100 border-l-[1px] border-gray-300 h-full w-fit flex items-center justify-center p-2 text-gray-600 rounded-r-md text-sm">
            @example.com
          </p>
        </div>
        {/* Input Group 03 */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <p className="bg-gray-100 border-r-[1px] border-gray-300 h-full w-fit flex items-center justify-center p-2 text-gray-600 rounded-l-md text-sm">
            https://example.com/users
          </p>
          <input
            type="text"
            placeholder="User email"
            required
            className="w-full text-sm p-2 rounded-md outline-none"
          />
        </div>
        {/* Input Group 04 */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <p className="bg-gray-100 border-r-[1px] border-gray-300 h-full w-fit flex items-center justify-center p-2 text-gray-600 rounded-l-md text-sm ">
            TextArea
          </p>
          <input
            type="text"
            placeholder="Type your text"
            required
            className="w-full text-sm p-2 rounded-md outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
