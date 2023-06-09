import Add from "./components/Add";
import { Context } from "./config/context";
import { useContext } from "react";
import List from "./components/List";

function App() {
  return (
    <div className="App">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-full h-screen flex  justify-center overflow-hidden">
          <div className="w-full max-w-[500px] h-screen bg-slate-200 rounded-md  relative">
            <Add />
            <List />
          </div>
        </div>
    </div>
  );
}

export default App;
