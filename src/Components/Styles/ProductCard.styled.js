import styled from "styled-components";

export const StyledProductCard = styled.article`
  height: 52.6rem;
  margin: 4.8rem 0 4.8rem 0;

  @media screen and (max-width: 992px) {
    height: 65rem;
  }
  @media screen and (max-width: 575px) {
    height: 85rem;
  }
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    width: 77%;
    margin: auto;
    max-width: 111rem;
    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 992px) {
      flex-direction: column;
      gap: 6rem;
    }
  }

  :nth-child(2) {
    .content {
      flex-direction: row-reverse;

      @media screen and (max-width: 992px) {
        flex-direction: column;
      }

      .text-content {
        padding: 0 9.6rem 0 0;

        @media screen and (max-width: 992px) {
          padding: 0;
        }
      }
    }
  }

  .img-content {
    flex: 1;
    background: url(${({ image }) => "/" + image});
    background-position: center;
    background-size: cover;
    height: 100%;
    border-radius: 0.9rem;
    width: 100%;
  }

  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 9.6rem;
    gap: 3rem;

    @media screen and (max-width: 992px) {
      padding: 0;
      align-items: center;
      text-align: center;
    }

    .headline {
      color: var(--peach);
    }
    h4 {
      width: 10ch;
      color: var(--black);
    }

    p {
      color: var(--dark-gray);
    }
  }
`;
