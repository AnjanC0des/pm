import { useReducer, useState, useId } from "react";
import "./App.css";
import { Card } from "@/components/ui/card";
import InputForm from "./InputForm";
import { v4 } from "uuid";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Project from "./Project";
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
  const [state1, setState1] = useState({
    t: "",
    d: "",
    due: "",
  });
  const [state, setState] = useReducer(reducer, {});
  const [aid, setAid] = useState("");
  const showProject = (id) => {
    setAid(id);
  };
  for (let key in state) {
    console.log(key);
    console.log(state[key].title);
  }

  let content =
    aid === "" ? (
      <InputForm set={setState} state={state1} setState={setState1} />
    ) : (
      <Project project={state[aid]} />
    );
  return (
    <>
      <div
        className="dark h-screen"
        onClick={() => {
          showProject("");
        }}
      >
        <div className="grid grid-cols-7 gap-4">
          <Card className="col-span-2 w-full h-screen p-2">
            <div className="w-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>+</TooltipTrigger>
                  {Object.keys(state).map((key) => {
                    return (
                      <TooltipTrigger
                        onClick={() => {
                          showProject(key);
                        }}
                      >
                        {state[key].title}
                      </TooltipTrigger>
                    );
                  })}
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
          <Card className="col-span-5 w-full">{content}</Card>
        </div>
      </div>
    </>
  );
}

export default App;
