import { styled } from "styled-components";

export const ProjectContainer = styled.main`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 50rem;
  min-height: 2rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;

  background: linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 40%,
        ${(props) => props.theme["gray-800"]} 100%
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 35%,
        ${(props) => props.theme["green-700"]} 100%
      )
      border-box;

  h3 {
    color: ${(props) => props.theme["gray-100"]};
  }
  p {
    color: ${(props) => props.theme["gray-400"]};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 2.55rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-300"]};
    border: none;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["green-700"]};

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
      cursor: pointer;
    }
  }
`;
