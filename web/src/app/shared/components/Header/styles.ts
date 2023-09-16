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
    }
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
  background-color: red;
  min-width: 160px;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;

  a {
    padding: 1em;
display: block;
  }
}

.dropdown:hover .dropdown-child {
  display: block;
}
`;