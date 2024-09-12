import { v4 } from "uuid";
export default (props) => {
  const { aid, add, subtext } = props;
  const id = v4();
  const subchange = (e) => {
    add({ func: "edit subtext", load: e.target.value, id: aid });
  };
  const submitSubtask = () => {
    add({
      func: "add subtasks",
      id: aid,
      subtaskid: id,
      subtaskdesc: subtext,
    });
    add({ func: "edit subtext", load: "", id: aid });
  };
  return (
    <>
      <input value={subtext} type="text" onChange={(e) => subchange(e)}></input>
      <button onClick={submitSubtask}></button>
    </>
  );
};
