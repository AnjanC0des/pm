import { Card } from "@/components/ui/card";
export default ({ project }) => {
  let { title, description, date } = project;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </>
  );
};
