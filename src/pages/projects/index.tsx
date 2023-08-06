import * as Dialog from "@radix-ui/react-dialog";
import { Project } from "./projectslist/index";
import { ProjectContainer, ProjectItem } from "./styles";

type ProjectsItem = {
  id: number;
  title: string;
  description: string;
};

const projectItem: ProjectsItem[] = [
  {
    id: 1,
    title: "Basic Math",
    description: "Addition, subtraction, multiplication and division tables.",
  },
  {
    id: 2,
    title: "To-Do List",
    description: "Your to-do tasks in an organized list.",
  },
  {
    id: 3,
    title: "Coffee Delivery",
    description:
      "Many options of the best coffee for you and we deliver to your home.",
  },
  {
    id: 4,
    title: "Pomodoro",
    description:
      "  Your studies, taks and other things with time to be done and rest break.",
  },
];

export function Projects() {
  return (
    <Dialog.Root>
      <ProjectContainer id="projects">
        {projectItem.map((item) => (
          <ProjectItem key={item.id}>
            <div>
              <h3> {item.title}</h3>
              <p>{item.description} </p>
            </div>
            <Dialog.Trigger asChild>
              <button>See more</button>
            </Dialog.Trigger>
          </ProjectItem>
        ))}
      </ProjectContainer>
      <Project />
    </Dialog.Root>
  );
}
