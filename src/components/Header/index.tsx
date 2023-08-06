import { Code, FileCode, SketchLogo, UserCircle, Wrench } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { ReactNode } from "react";

type MenuHeader = {
  id: number;
  name: string;
  link: string;
  icon: () => ReactNode;
};
const menu: MenuHeader[] = [
  {
    id: 1,
    name: "Profile",
    link: "#profile",
    icon() {
      return <UserCircle size={24} />;
    },
  },
  {
    id: 2,
    name: "Projects",
    link: "#projects",
    icon() {
      return <Code size={24} />;
    },
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
    icon() {
      return <Wrench size={24} />;
    },
  },
];

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <a href="#profile">
          <span>
            <FileCode size={36} weight="fill" />
          </span>
          <h1 title="CodeAim">CodAim</h1>
          <SketchLogo size={22} />
        </a>
      </div>
      <nav>
        {menu.map((menu) => (
          <a key={menu.id} href={menu.link} title={menu.name}>
            <span>{menu.icon()}</span>
            <span>{menu.name}</span>
          </a>
        ))}
      </nav>
    </HeaderContainer>
  );
}
