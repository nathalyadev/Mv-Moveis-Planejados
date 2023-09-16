import styled from "styled-components";

export const HomePageContainer = styled.section``;

export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--main-color);

  .content-logo {
    img {
      width: 15em;
    }
  }

  .main-image-container {
    img {
      width: 34.375em;
    }
  }

  h2 {
    color: #000;
    font-family: Julius Sans One;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    word-wrap: break-word;
    max-width: 17ch;
  }
`;
