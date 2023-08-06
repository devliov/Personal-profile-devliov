import { styled } from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  border: 1px solid transparent;
  align-items: flex-end;
  margin-top: 4rem;
  margin-bottom: 14rem;

  @media (max-width: 720px) {
    margin-top: 8rem;
    align-items: center;
    height: max-content;
    align-items: center;
  }

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

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Baloo 2", sans-serif;

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      color: ${(props) => props.theme["gray-400"]};
    }

    @media (max-width: 720px) {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1rem;
      }
    }

    @media (max-width: 475px) {
      h2 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.6rem;
      }
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
  @media (max-width: 720px) {
    width: 225px;
    height: 225px;
  }

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
  }
  img {
    width: 450px;
    height: 450px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    filter: brightness(0.81);

    @media (max-width: 720px) {
      width: 225px;
      height: 225px;
    }

    @media (max-width: 425px) {
      width: 150px;
      height: 150px;
      border-bottom-right-radius: 20px;
    }
  }
`;
