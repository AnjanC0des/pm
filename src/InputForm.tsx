import { useState, useId } from "react";
export default (addFunc) => {
  const [state, setState] = useState({
    t: "",
    d: "",
    due: "",
  });
  const change = (key, value) => {};
  const func = () => {
    const id = useId();
    const x = {
      title: state.t,
      dsecription: state.d,
      due: state.due,
    };
    addFunc(id, x);
    setState({
      t: "",
      d: "",
      due: "",
    });
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          change("t", e.target.value);
        }}
      ></input>
      <textarea
        onChange={(e) => {
          change("d", e.target.value);
        }}
      ></textarea>
      <input
        type="date"
        onChange={(e) => {
          change("due", e.target.value);
        }}
      ></input>
      <button onClick={func}>Submit</button>
    </>
  );
};
