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

const projectItem: ProjectsItem[] = [
  {
    id: 1,
    title: "SonoLiffe",
    description: "Página de vendas de colchão",
    image: Todo,
    gitHub: "https://github.com/devliov/sonoliffe",
    ghPages: "https://devliov.github.io/sonoliffe/",
  },
  {
    id: 2,
    title: "Barbearia do Irmão",
    description: "Página da barbearia completa",
    image: Todo,
    gitHub: "https://github.com/devliov/barbearia-do-irmao",
    ghPages: "https://devliov.github.io/barbearia-do-irmao/",
  },
  {
    id: 3,
    title: "Perfil Pessoal",
    description: "Site pessoal com projetos e habilidades.",
    image: Todo,
    gitHub: "https://github.com/devliov/personal-profile-devliov",
    ghPages: "https://devliov.github.io/personal-profile-devliov/",
  },
  {
    id: 4,
    title: "Lista de Tarefas",
    description: "Suas tarefas em uma lista organizada.",
    image: Todo,
    gitHub: "https://github.com/devliov/todo-list-react-vite-deploy",
    ghPages: "https://devliov.github.io/todo-list-react-vite-deploy/",
  },
  {
    id: 5,
    title: "Landingpage ",
    description: "Landingpage profissional",
    image: Todo,
    gitHub: "https://github.com/devliov/landingpage-deploy",
    ghPages: "https://devliov.github.io/landingpage-deploy/",
  },
  {
    id: 6,
    title: "Mídia Social",
    description: "Esboço básico de um feed de mídia social.",
    image: Todo,
    gitHub: "https://github.com/devliov/Feed-Post-Comment-react",
    ghPages: "https://devliov.github.io/Feed-Post-Comment-react/",
  },
];

export function Projects() {
  return (
    <ProjectContainer id="projects">
      <h2>Projetos</h2>
      {projectItem.map((item) => (
        <ProjectItem key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <section>
            <p>Visualize o site:</p>
            <a href={item.ghPages} target="_blank">
              gh-pages
            </a>
            <p>Visualize o repositório:</p>
            <a href={item.gitHub} target="_blank">
              github
            </a>
          </section>
        </ProjectItem>
      ))}
    </ProjectContainer>
  );
}
