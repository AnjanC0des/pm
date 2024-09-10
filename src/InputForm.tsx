import { useState, useId } from "react";
export default () => {
  const [state, setState] = useState({
    t: "",
    d: "",
    due: new Date().toLocaleDateString(),
  });
  const id = useId();
  const change = (key, value) => {
    console.log(state);
    setState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const func = () => {
    const x = {
      title: state.t,
      dsecription: state.d,
      due: state.due,
    };
    console.log(id + " " + state.t + state.d + state.due);
    setState({
      t: "",
      d: "",
      due: new Date(Date.now()).toLocaleString(),
    });
  };
  return (
    <>
      <input
        type="text"
        value={state.t}
        onChange={(e) => {
          change("t", e.target.value);
        }}
      ></input>
      <textarea
        value={state.d}
        onChange={(e) => {
          change("d", e.target.value);
        }}
      ></textarea>
      <input
        value={state.due}
        type="date"
        onChange={(e) => {
          change("due", e.target.value);
        }}
      ></input>
      <button onClick={func}>Submit</button>
    </>
  );
};
