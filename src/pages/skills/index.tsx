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
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    icon: iconJs,
  },
  {
    id: 2,
    title: "Typescript",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    icon: iconTs,
  },
  {
    id: 3,
    title: "React js",
    description:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    icon: iconReact,
  },
  {
    id: 4,
    title: "Next js",
    description:
      "  Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    icon: iconNext,
  },
  {
    id: 5,
    title: "HTML",
    description:
      "      The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
    icon: iconHtml,
  },
  {
    id: 6,
    title: "CSS",
    description:
      " Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup  language such as HTML or XML.",
    icon: iconCss,
  },
];

export function Skills() {
  return (
    <SkillContainer id="skills">
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
