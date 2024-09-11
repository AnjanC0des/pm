import { useReducer } from "react";
import "./App.css";
import { Card } from "@/components/ui/card";
import InputForm from "./InputForm";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const reducer = (state, action) => {
  if (action.func == "add") {
    return {
      ...state,
      [action.id]: action.load,
    };
  } else {
    return {};
  }
};
function App() {
  const [state, setState] = useReducer(reducer, {});
  for (let key in state) {
    console.log(key);
    console.log(state[key].title);
  }
  return (
    <>
      <div className="dark h-screen">
        <div className="grid grid-cols-7 gap-4">
          <Card className="col-span-2 w-full h-screen p-2">
            <div className="w-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>+</TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
          <Card className="col-span-5 w-full">
            <InputForm set={setState} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
