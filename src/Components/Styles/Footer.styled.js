import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 36.5rem;
  width: 100%;
  background-color: var(--black);
  padding: 7.5rem 0 5.1rem 0;

  @media screen and (max-width: 543px) {
    height: 60rem;
  }

  @media screen and (max-width: 768px) {
    padding: 4.5rem 0 3.1rem 0;
  }

  .content {
    width: 77%;
    margin: auto;
    display: grid;
    grid-template-areas: "a b" "c d" "e e";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 6.8rem 8.6rem 8.6rem;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }

    @media screen and (max-width: 1120px) {
      grid-template-areas: "a b" "c c" "e e";
    }
    @media screen and (max-width: 768px) {
      grid-template-areas: "a a" "b b" "c c" "e e";
      grid-template-rows: 2fr 2fr 5fr 1fr;
    }

    @media screen and (max-width: 543px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      height: 100%;
    }
  }

  .footer-about {
    color: var(--dark-gray);
    grid-area: c;

    width: 60ch;
    @media screen and (max-width: 768px) {
      width: auto;
    }
    @media screen and (max-width: 543px) {
      grid-area: unset;
    }
  }

  .footer-copy {
    color: var(--dark-gray);
    grid-area: e;

    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 543px) {
      grid-area: unset;
      align-items: center;
      text-align: center;
    }
  }

  nav {
    ul {
      display: flex;
      gap: 3.4rem;

      @media screen and (max-width: 543px) {
        gap: 1.7rem;
      }

      li {
        a {
          color: var(--white);
          font-size: 1.5rem;
          transition: color 0.2s ease;

          :hover {
            color: var(--peach);
          }
        }
      }

      @media screen and (max-width: 543px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .footer-social-links {
    display: flex;
    grid-area: d;
    /* background-color: palegreen; */
    justify-content: end;
    align-items: flex-end;
    gap: 1.7rem;
    @media screen and (max-width: 1120px) {
      grid-area: e;
    }
    li {
      a {
        svg {
          height: 2.4rem;
          color: var(--white);
          transition: color 0.2s ease;
        }

        :hover {
          svg {
            color: var(--peach);
          }
        }
      }
    }

    @media screen and (max-width: 543px) {
      grid-area: unset;
    }
  }

  .logo {
    grid-area: a;
    /* background-color: green; */
    @media screen and (max-width: 543px) {
      grid-area: unset;
    }
  }
  .nav-links {
    grid-area: b;
    /* background-color: red; */
    display: flex;
    justify-content: end;

    @media screen and (max-width: 768px) {
      justify-content: start;
    }
    @media screen and (max-width: 543px) {
      grid-area: unset;
    }
  }
`;
