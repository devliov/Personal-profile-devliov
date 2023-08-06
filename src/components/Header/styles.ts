import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    width: 20rem;
    height: 3rem;
    align-items: center;
    a {
      display: flex;
      text-decoration: none;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme["green-500"]};
      }

      h1 {
        width: max-content;
        background: linear-gradient(
          60deg,
          ${(props) => props.theme["green-500"]} 0%,
          ${(props) => props.theme["white"]} 80%
        );
        -webkit-text-fill-color: transparent;
        background-clip: unset;
        -webkit-background-clip: text;
        font-style: italic;
        padding-right: 0.5rem;
      }
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;
    width: 50%;
    justify-content: space-evenly;

    @media (max-width: 720px) {
      justify-content: center;
      width: 100%;
    }

    a {
      width: 6rem;
      height: 3rem;
      gap: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      border-top: 3px solid transparent;
      border-bottom: 3px solid ${(props) => props.theme["gray-300"]};

      span {
        color: ${(props) => props.theme["green-500"]};
      }

      &:hover {
        border-radius: 15px;
      }

      &.active {
        span {
          color: ${(props) => props.theme["gray-100"]};
        }
        color: ${(props) => props.theme["green-500"]};
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
        border-radius: 15px;
      }
    }
  }
`;
