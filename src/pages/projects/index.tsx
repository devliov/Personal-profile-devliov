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
    description: "My own personal website with projects and skills.",
    image: Todo,
    gitHub: "https://github.com/devliov/personal-profile-devliov",
    ghPages: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 2,
    title: "To-Do List",
    description: "Your to-do tasks in an organized list.",
    image: Todo,
    gitHub: "https://github.com/devliov/todo-list-react-vite-deploy",
    ghPages: "https://devliov.github.io/todo-list-react-vite-deploy/",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Basic draft of a social media feed",
    image: Todo,
    gitHub: "https://github.com/devliov/Feed-Post-Comment-react",
    ghPages: "https://devliov.github.io/Feed-Post-Comment-react/",
  },
];

export function Projects() {
  return (
    <ProjectContainer id="projects">
      <h2>Projects</h2>
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
