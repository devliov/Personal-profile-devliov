import { styled } from "styled-components";

export const SkillContainer = styled.main`
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

export const SkillBox = styled.div`
  display: flex;
  gap: 1rem;
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
