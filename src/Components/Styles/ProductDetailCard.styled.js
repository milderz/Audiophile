import styled from "styled-components";

export const StyledProductDetailCard = styled.article`
  display: flex;
  height: 56.1rem;

  .headline {
    color: var(--peach);
    margin-bottom: -2.25rem;
  }

  .img-content {
    flex: 53.8rem;
    background: url(${({ imgDesktop }) => "/" + imgDesktop});
    background-position: center;
    background-size: cover;
    height: 100%;

    @media screen and (max-width: 900px) {
      flex: 1;
    }
  }
  .text-content {
    flex: 57.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4.5rem;
    padding-left: 8%;

    @media screen and (max-width: 900px) {
      flex: 1;
      padding-left: 0;
    }
  }
  .btn-wrapper {
    display: flex;
    gap: 1.5rem;
  }

  .price {
    font-weight: 800;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    height: 76.1rem;
    gap: 4.5rem;
  }
`;
