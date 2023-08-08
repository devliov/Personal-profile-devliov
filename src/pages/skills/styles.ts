import { styled } from "styled-components";

export const SkillContainer = styled.main`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    width: max-content;
    background: linear-gradient(
      60deg,
      ${(props) => props.theme["green-500"]} 0%,
      ${(props) => props.theme["white"]} 80%
    );
    -webkit-text-fill-color: transparent;
    background-clip: unset;
    -webkit-background-clip: text;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: max-content;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;

  background: linear-gradient(
        to right,
        ${(props) => props.theme["gray-900"]} 40%,
        ${(props) => props.theme["gray-800"]} 90%
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

  img {
    width: 3rem;
    height: 3rem;
  }
`;
