import { v4 } from "uuid";
export default (props) => {
  const { aid, addSubtasks, subtext, setSubtext } = props;
  const id = v4();
  const subchange = (e) => {
    setSubtext(e.target.value);
  };
  const submitSubtask = () => {
    addSubtasks({
      func: "add subtasks",
      id: aid,
      subtaskid: id,
      subtaskdesc: subtext,
    });
    setSubtext("");
  };
  return (
    <>
      <input value={subtext} type="text" onChange={(e) => subchange(e)}></input>
      <button onClick={submitSubtask}></button>
    </>
  );
};
