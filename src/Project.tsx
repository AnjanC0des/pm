import { Card } from "@/components/ui/card";
import AddSubtasks from "./AddSubtasks";
export default ({ project, aid, add, delfunc }) => {
  let { title, description, date, subtasks, tempsubtask } = project[aid];
  console.log(subtasks);
  const delsub = (id) => {
    add({ func: "delete subtask", id: aid, sid: id });
  };
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={() => delfunc(aid)}>Delete</button>
      <AddSubtasks add={add} aid={aid} subtext={tempsubtask} />
      {Object.keys(subtasks).map((task) => {
        return (
          <>
            <p>{"" + subtasks[task]}</p>
            <button onClick={() => delsub(task)}>del</button>
          </>
        );
      })}
    </>
  );
};
