import { Card } from "@/components/ui/card";
import AddSubtasks from "./AddSubtasks";
export default ({ project, aid, ...props }) => {
  let { title, description, date, subtasks, tempsubtask } = project[aid];
  console.log(subtasks);
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <AddSubtasks {...props} aid={aid} subtext={tempsubtask} />
      {Object.keys(subtasks).map((task) => {
        return (
          <>
            <p>{"" + subtasks[task]}</p>
          </>
        );
      })}
    </>
  );
};
