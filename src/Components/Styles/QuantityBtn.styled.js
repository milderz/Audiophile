import styled from "styled-components";

export const StyledQuantityBtn = styled.div`
  height: 4.8rem;
  width: 12.1rem;
  display: flex;
  background-color: #e9e9ed;

  button {
    cursor: pointer;
    height: 4.8rem;
    width: 4.5rem;
    border: none;
    font-size: 1.5rem;
    transition: all 0.2s ease;

    :hover {
      color: var(--peach);
    }
  }

  .quantity {
    flex-grow: 1;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
