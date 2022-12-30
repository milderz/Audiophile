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
`;
