const FormControl = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-sm font-geist">
      <div>
        <h1 className="font-bold text-2xl pb-2">Form Control 01</h1>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            Name
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="name@example.com"
            className="border border-gray-300 p-2 rounded-sm text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Text Area</label>
          <textarea
            className="border border-gray-300 p-2 rounded-sm text-sm"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default FormControl;
