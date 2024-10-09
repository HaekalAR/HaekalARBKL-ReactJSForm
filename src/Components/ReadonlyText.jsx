const ReadonlyText = () => {
  return (
    <div className="border border-gray-300 rounded-sm font-geist p-4 text-[#303030]">
      <div>
        <h1 className="text-2xl font-bold pb-2">Readonly Plain Text</h1>
      </div>
      <form>
        <table>
          <tr>
            <td>
              <p>Email</p>
            </td>
            <td className="pl-2 w-full">
              <input type="email" readOnly value="rimuru@example.com" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Password</p>
            </td>
            <td className="pl-2">
              <input
                type="password"
                placeholder="Your password"
                className="border border-gray-300 p-1.5 text-sm rounded-sm w-full"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Instance</p>
            </td>
            <td className="pl-2">
              <input type="text" readOnly value="Jura Tempest Renpōkoku" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Password</p>
            </td>
            <td className="pl-2">
              <input
                type="password"
                placeholder="Your password"
                className="border border-gray-300 p-1.5 text-sm rounded-sm w-full"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default ReadonlyText;
