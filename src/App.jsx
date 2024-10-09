import ButtonStyles from "./Components/ButtonStyles";
import FilelInput from "./Components/FileInput";
import FormControl from "./Components/FormControl";
import InputGroup from "./Components/InputGroup";
import InputLayout from "./Components/InputLayout";
import ReadonlyInput from "./Components/ReadonlyInput";
import ReadonlyText from "./Components/ReadonlyText";
import SimpleInput from "./Components/SimpleInput";

const App = () => {
  return (
    <div className="p-2 w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        <FormControl />
        <FilelInput />
        <ReadonlyInput />
        <ReadonlyText />

        {/* === <--<<> Wall <>>-> === */}

        <SimpleInput />
        <ButtonStyles />
        <InputGroup />
        <div className="lg:col-span-2 md:col-span-1">
          <InputLayout />
        </div>
      </div>
    </div>
  );
};

export default App;
