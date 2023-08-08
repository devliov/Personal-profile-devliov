import { ProjectContainer, ProjectItem } from "./styles";

import Todo from "../../assets/Screenshot from 2023-06-12 17-41-00.png";

type ProjectsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  gitHub: string;
  ghPages?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const projectItem: ProjectsItem[] = [
  {
    id: 1,
    title: "Personal Profile",
    description: "Addition, subtraction, multiplication and division tables.",
    image: Todo,
    gitHub: "https://github.com/devliov/personal-profile-devliov",
    ghPages: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 2,
    title: "To-Do List",
    description: "Your to-do tasks in an organized list.",
    image: Todo,
    gitHub: "https://github.com/devliov/personal-profile-devliov",
    ghPages: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 3,
    title: "Coffee Delivery",
    description:
      "Many options of the best coffee for you and we deliver to your home.",
    image: Todo,
    gitHub: "https://github.com/devliov/personal-profile-devliov",
    ghPages: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 4,
    title: "Pomodoro",
    description:
      "  Your studies, taks and other things with time to be done and rest break.",
    image: Todo,
    gitHub: "https://github.com/devliov/todo-list-react-vite-deploy",
    ghPages: "https://devliov.github.io/todo-list-react-vite-deploy/",
  },
];

export function Projects() {
  return (
    <ProjectContainer id="projects">
      {projectItem.map((item) => (
        <ProjectItem key={item.id}>
          <div>
            <h3> {item.title}</h3>
            <p>{item.description} </p>
          </div>
          <section>
            <p>look web site :</p>
            <a href={item.ghPages} target="_blank">
              gh-pages
            </a>
            <p>look repository :</p>
            <a href={item.gitHub} target="_blank">
              github
            </a>
          </section>
        </ProjectItem>
      ))}
    </ProjectContainer>
  );
}
