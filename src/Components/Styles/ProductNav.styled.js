import styled from "styled-components";

export const StyledProductNav = styled.nav`
  margin: ${({ mobileNav }) => (mobileNav ? "9.6rem 0 0 0" : "11.5rem 0")};
  height: 30.9rem;
  background-color: #fff;
  position: ${({ mobileNav }) => (mobileNav ? "absolute" : "static")};
  width: 100%;
  top: 0;
  left: 0;

  border-bottom-left-radius: ${({ mobileNav }) => (mobileNav ? "1.6rem" : "0")};
  border-bottom-right-radius: ${({ mobileNav }) =>
    mobileNav ? "1.6rem" : "0"};
  visibility: ${({ navActive, mobileNav }) =>
    navActive ? "visible" : !mobileNav ? "visible" : "hidden"};
  opacity: ${({ navActive, mobileNav }) =>
    navActive ? "1" : !mobileNav ? "1" : "0"};
  transition: opacity 0.4s ease;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    width: ${({ mobileNav }) => (mobileNav ? "100%" : "77%")};
    margin: auto;
    grid-gap: 3rem;
    height: 100%;
    padding-bottom: 3rem;

    @media screen and (max-width: 1280px) {
      width: ${({ mobileNav }) => (mobileNav ? "96%" : "90%")};
    }

    @media screen and (max-width: 633px) {
      height: 75.4rem;
      grid-template-columns: 1fr;
      padding: 3rem 0;
    }

    li {
      position: relative;

      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        position: relative;

        .nav-link {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--black);
        }

        .nav-link-shop {
          span {
            color: var(--dark-gray);
            font-size: 1.3rem;
            font-weight: 600;
            margin-right: 1.3rem;
          }

          svg {
            color: var(--peach);
          }
        }

        :hover {
          span {
            color: var(--peach);
          }
        }
      }
      img {
        height: 16rem;
        @media screen and (max-width: 633px) {
          height: 11rem;
        }
      }

      :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20.4rem;
        background-color: #f1f1f1;
        border-radius: 0.6rem;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 633px) {
    height: 75.4rem;
  }
`;
