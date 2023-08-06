import { BoxImage, ContainerMain, SocialMediaContainer } from "./styles";
import MyPhoto from "../../assets/perfil.png";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Projects } from "../projects";
import { Skills } from "../skills";

export function Home() {
  return (
    <div>
      <ContainerMain id="profile">
        <div>
          <h2>Eli Oliver</h2>
          <h3>Front-End Web Developer </h3>
          <SocialMediaContainer>
            <a
              href="https://www.linkedin.com/in/eli-oliver-606a38270/"
              target="_blank"
            >
              <LinkedinLogo weight="fill" size={32} />
            </a>
            <a href="https://github.com/devliov" target="_blank">
              <GithubLogo weight="fill" size={32} />
            </a>
          </SocialMediaContainer>
        </div>
        <BoxImage>
          <img src={MyPhoto} alt="" />
        </BoxImage>
      </ContainerMain>
      <Projects />
      <Skills />
    </div>
  );
}
