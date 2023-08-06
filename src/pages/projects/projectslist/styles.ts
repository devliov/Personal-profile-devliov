import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};
  position: fixed;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 1rem;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};

  &:hover {
    color: ${(props) => props.theme["red-500"]};
  }
`;

export const BoxButton = styled.div`
  height: 2rem;
  width: 100%;
`;

export const BoxProject = styled.div`
  section {
    img {
      max-width: 35rem;
      max-height: 18rem;
      border-radius: 0.5rem;

      @media (max-width: 720px) {
        max-width: 20rem;
        max-height: 9rem;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 1rem;

    a {
      display: flex;
      height: 2rem;
      width: 10rem;
      justify-content: center;
      text-decoration: none;
      font-weight: bold;
      align-items: center;
      border-radius: 6px;
      background: ${(props) => props.theme["green-700"]};

      &:hover {
        background: ${(props) => props.theme["green-500"]};
      }
    }
  }
`;
