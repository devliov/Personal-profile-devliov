import { styled } from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-around;
  border: 1px solid transparent;
  align-items: flex-end;
  margin-top: 9rem;

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
  border-radius: 12px;
  /* border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px; */

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Baloo 2", sans-serif;

    h2 {
      font-size: 40px;
    }

    h3 {
      color: ${(props) => props.theme["gray-400"]};
    }
  }
`;

export const SocialMediaContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const BoxImage = styled.section`
  width: 450px;
  height: 450px;
  img {
    width: 450px;
    height: 450px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    filter: brightness(0.81);
  }
`;
