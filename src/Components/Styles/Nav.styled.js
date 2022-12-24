import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;

    li {
      margin: 3.4rem;

      img {
        height: 13.8rem;
        display: none;
      }

      a {
        font-size: var(--text-sm);
        color: var(--white);
        transition: color 0.2s ease;

        :hover {
          color: var(--peach);
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
