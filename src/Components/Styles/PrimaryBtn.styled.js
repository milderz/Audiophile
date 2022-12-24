import styled from "styled-components";

export const StyledPrimaryBtn = styled.div`
  a {
    cursor: pointer;
    display: grid;
    place-items: center;
    width: 16rem;
    height: 4.8rem;
    font-size: 1.4rem;
    font-weight: 600;
    background-color: ${({ version }) =>
      version === "main"
        ? "var(--peach)"
        : version === "black"
        ? "var(--black)"
        : version === "outline"
        ? "transparent"
        : null};
    color: ${({ version }) =>
      version === "main"
        ? "var(--white)"
        : version === "black"
        ? "var(--white)"
        : version === "outline"
        ? "var(--black)"
        : null};
    border: ${({ version }) =>
      version === "outline"
        ? "0.2rem solid var(--black)"
        : "0.2rem solid transparent"};
    transition: all 0.2s ease;

    :hover {
      background-color: ${({ version }) =>
        version === "main"
          ? "var(--light-peach)"
          : version === "black"
          ? "var(--light-black)"
          : version === "outline"
          ? "var(--black)"
          : null};

      color: ${({ version }) =>
        version === "outline" ? "var(--white)" : null};
    }
  }
`;
