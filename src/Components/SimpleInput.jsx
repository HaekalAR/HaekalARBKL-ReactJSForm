const SimpleInput = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-sm font-geist">
      <div>
        <h1 className="font-bold text-2xl">Simple Input and Button</h1>
      </div>
      <form className="flex flex-col gap-2 pt-2">
        <table>
          <tr>
            <td>
              <p>Name</p>
            </td>
            <td>
              <input
                type="text"
                required
                placeholder="Your name"
                className="border border-gray-300 rounded-sm text-sm px-2 py-1.5 w-full"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Email</p>
            </td>
            <td>
              <input
                type="email"
                required
                placeholder="Your email"
                className="border border-gray-300 rounded-sm text-sm px-2 py-1.5 w-full"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Password</p>
            </td>
            <td>
              <input
                type="Password"
                required
                placeholder="Your password"
                className="border border-gray-300 rounded-sm text-sm px-2 py-1.5 w-full"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Instance</p>
            </td>
            <td>
              <input
                type="text"
                required
                value="Jura Tempest Renpōkoku"
                readOnly
                className="border border-gray-300 rounded-sm text-sm px-2 py-1.5 text-gray-600 bg-gray-200 focus:border focus:border-gray-500 outline-none w-full"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="flex gap-2 py-2 justify-between">
              <button className="bg-white border border-red-500 px-7 py-1 rounded-sm text-red-500 font-semibold hover:border-red-700 hover:bg-red-500 hover:text-white transition-all duration-200">
                Reset
              </button>
              <button className="bg-white border border-indigo-500 rounded-sm text-indigo-500 font-semibold px-7 py-1 hover:border-indigo-700 hover:bg-indigo-600 hover:text-white transition-all duration-200">
                Submit
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default SimpleInput;
