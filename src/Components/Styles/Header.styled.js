import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 9.6rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--black);

  .content {
    border-bottom: 0.2rem solid #464646;
    width: 77%;
    margin: auto;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  button {
    background: none;
    border: none;

    svg {
      height: 2.2rem;
      color: var(--white);
    }
  }
`;
