const InputLayout = () => {
  return (
    <div className="border border-gray-300 p-4 font-geist rounded-sm">
      <div>
        <h1 className="text-2xl font-bold pb-2">Input Layout</h1>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* === Inputs === */}
        <div className="col-span-2">
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            required
            className="border border-gray-300 text-sm p-2 rounded-sm w-full"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="Your password"
            required
            className="border border-gray-300 text-sm p-2 rounded-sm w-full"
          />
        </div>
        <div className="col-span-4">
          <label className="text-sm">Address</label>
          <input
            type="text"
            placeholder="Your address"
            required
            className="border border-gray-300 text-sm p-2 rounded-sm w-full"
          />
        </div>
        <div className="col-span-2">
          <label className="text-sm">City</label>
          <div className="border border-gray-300 text-sm p-2 rounded-sm overflow-hidden">
            <input
              type="text"
              placeholder="Your city"
              required
              className="w-full"
            />
          </div>
        </div>
        <div>
          <label className="text-sm">State</label>
          <div className="border border-gray-300 text-sm text-gray-600 justify-center p-2 rounded-sm w-full">
            <select id="inputState" className="w-full outline-none">
              <option selected value="state-01">
                State 01
              </option>
              <option value="state-02">State 02</option>
              <option value="state-03">State 03</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-sm">Name</label>
          <div className="border border-gray-300 text-sm p-2 rounded-sm w-full overflow-hidden ">
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputLayout;
