import { SkillBox, SkillContainer } from "./styles";

import iconReact from "../../assets/icons8-react.svg";
import iconHtml from "../../assets/icons8-html5.svg";
import iconCss from "../../assets/icons8-css.svg";
import iconNext from "../../assets/next-js-seeklogo.com.svg";
import iconJs from "../../assets/icons8-javascript.svg";
import iconTs from "../../assets/icons8-typescript(1).svg";

type SkillsItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const skillsItem: SkillsItem[] = [
  {
    id: 1,
    title: "Javascript",
    description:
      "JavaScript, frequentemente abreviado como JS, é uma linguagem de programação que é uma das tecnologias principais da World Wide Web, junto com HTML e CSS.",
    icon: iconJs,
  },
  {
    id: 2,
    title: "Typescript",
    description:
      "TypeScript é uma linguagem de programação gratuita e de código aberto desenvolvida pela Microsoft que adiciona tipagem estática com anotações de tipo opcionais ao JavaScript.",
    icon: iconTs,
  },
  {
    id: 3,
    title: "React js",
    description:
      "React (também conhecido como React.js ou ReactJS) é uma biblioteca de JavaScript de código aberto e gratuita para construir interfaces de usuário baseadas em componentes.",
    icon: iconReact,
  },
  {
    id: 4,
    title: "Next js",
    description:
      "Next.js é um framework de desenvolvimento web de código aberto criado pela empresa privada Vercel que fornece aplicativos web baseados em React com renderização do lado do servidor e geração de sites estáticos.",
    icon: iconNext,
  },
  {
    id: 5,
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web.",
    icon: iconHtml,
  },
  {
    id: 6,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) é uma linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML ou XML.",
    icon: iconCss,
  },
];

export function Skills() {
  return (
    <SkillContainer id="skills">
      <h2>Habilidades</h2>
      {skillsItem.map((skill) => (
        <SkillBox key={skill.id}>
          <div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
          <img src={skill.icon} alt="" />
        </SkillBox>
      ))}
    </SkillContainer>
  );
}
