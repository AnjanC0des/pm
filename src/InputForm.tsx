import { v4 } from "uuid";
export default ({ state, setState, set }) => {
  const id = v4();
  const change = (key, value) => {
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
      tempsubtask: "",
      subtasks: {},
    };
    set({ func: "add", id: id, load: x });
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
