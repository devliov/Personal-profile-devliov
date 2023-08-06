import * as Dialog from "@radix-ui/react-dialog";

import { BoxButton, BoxProject, CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

import Todo from "../../../assets/Screenshot from 2023-06-12 17-41-00.png";

export function Project() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <BoxButton>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </BoxButton>
        <BoxProject>
          <section>
            <img src={Todo} alt="" />
          </section>
          <div>
            <p>look web site :</p>
            <a
              href="https://devliov.github.io/todo-list-react-vite-deploy/"
              target="_blank"
            >
              gh-pages
            </a>
            <p>look repository :</p>
            <a
              href="https://github.com/devliov/todo-list-react-vite-deploy"
              target="_blank"
            >
              github
            </a>
          </div>
        </BoxProject>
      </Content>
    </Dialog.Portal>
  );
}
