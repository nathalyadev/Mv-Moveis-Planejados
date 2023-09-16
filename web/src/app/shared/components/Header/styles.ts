import { styled } from "styled-components";

export const NavigationHeader = styled.section`
  display: flex;
  margin: 0.6875em 1.5625em 0 1.5625em;

  .content-image {
    img {
      width: 2.875em;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 1.875em;

    li {
      color: #000000;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-size: 1.25em;
      position: relative;
    }
  }

  a {
  }
  li::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  li:hover::before { 
    transform-origin: left;
    transform: scaleX(1);
  }

  .dropdown:hover .dropdown-child {
    display: block;
  }
`;

export const DropDown = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-child {
    display: none;
    position: absolute;
    max-width: 240px;
    width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    font-size: 0.8em;

    a {
      padding: 1em;
      display: block;
    }
  }
`;
