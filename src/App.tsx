import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "@/components/ui/card";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function App() {
  const [obj, setObj] = useState();
  return (
    <>
      <div className="dark h-screen">
        <div className="grid grid-cols-7 gap-4">
          <Card className="col-span-2 w-full h-screen p-2">
            <div className="w-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>Projects</TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
          <Card className="col-span-5 w-full"></Card>
        </div>
      </div>
    </>
  );
}

export default App;
