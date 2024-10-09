const ButtonStyles = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-sm font-geist">
      <div>
        <h1 className="font-bold text-2xl pb-2">Button Styles</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {/* <=== Buttons ===> */}
        <div>
          {/* Normal Button */}
          <button className="w-full border border-indigo-500 hover:bg-indigo-600 text-indigo-500 hover:text-white font-bold py-2 px-4 rounded transition-all duration-200">
            Button
          </button>
        </div>
        {/* Danger / Error Button */}
        <div>
          <button className="w-full border border-red-500 hover:bg-red-600 text-red-500 hover:text-white font-bold py-2 px-4 rounded transition-all duration-200">
            Button
          </button>
        </div>
        {/* Success Button */}
        <div>
          <button className="w-full border border-green-500 hover:bg-green-600 text-green-500 hover:text-white font-bold py-2 px-4 rounded transition-all duration-200">
            Button
          </button>
        </div>
        {/* Checked Button */}
        <div>
          <button
            className="w-full text-gray-200 bg-gray-500 font-medium py-2 px-4 rounded transition-all duration-200"
            disabled
          >
            Checked
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonStyles;
