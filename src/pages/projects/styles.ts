import { styled } from "styled-components";

export const ProjectContainer = styled.main`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: max-content;
  gap: 1rem;
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

  section {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    gap: 0.5rem;
    a {
      display: flex;
      height: 2rem;
      width: 8rem;
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
