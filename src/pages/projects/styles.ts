import { styled } from "styled-components";

export const ProjectContainer = styled.main`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 100vh;
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
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
    flex-shrink: 0;
    max-height: 3rem;
    padding: 0.5rem;
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
