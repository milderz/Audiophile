import styled from "styled-components";

export const StyledProductDetail = styled.section`
  width: 77%;
  margin: auto;
  max-width: 111rem;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  .product-detail-card {
    display: flex;
    height: 56.1rem;

    .headline {
      color: var(--peach);
      margin-bottom: -2.25rem;
    }

    .img-content {
      flex: 53.8rem;
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
  }

  .detail-page-features {
    display: flex;
    gap: 12.9rem;
    margin: 16.2rem 0;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  .features {
    flex: 56.84%;

    p {
      margin-top: 4.5rem;
    }
  }

  .in-the-box {
    flex: 31.62%;
    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 4.5rem;

      li {
        display: flex;
        gap: 2.5rem;
        .itb-qty {
          color: var(--peach);
          font-weight: 900;
        }
      }
    }
  }

  .detail-grid-images {
    height: 59.2rem;
    display: grid;
    grid-template-columns: 40% 57%;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 3rem;

    div {
      border-radius: 0.9rem;
    }

    div:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
      @media screen and (max-width: 750px) {
        grid-area: auto;
      }
    }
    div:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;

      @media screen and (max-width: 750px) {
        grid-area: auto;
      }
    }
    div:nth-child(3) {
      grid-area: 1 / 2 / 3 / 3;
      @media screen and (max-width: 750px) {
        grid-area: auto;
      }
    }

    @media screen and (max-width: 750px) {
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: 20.6rem 20.6rem 43.7rem;
    }
  }
`;
