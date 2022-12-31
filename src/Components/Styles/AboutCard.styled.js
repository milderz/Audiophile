import styled from "styled-components";

export const StyledAboutCard = styled.article`
  height: 58.8rem;
  width: 77%;

  display: flex;
  gap: 3rem;
  margin: 0 auto 4.8rem auto;
  max-width: 111rem;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
  }

  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 992px) {
      align-items: center;
      text-align: center;
    }

    h3 {
      span {
        color: var(--peach);
      }
    }
    p {
      width: 54ch;
      color: var(--dark-gray);

      @media screen and (max-width: 992px) {
        width: auto;
      }
    }
  }

  .image-content {
    flex: 1;
    background: url("/assets/shared/desktop/image-best-gear.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 0.9rem;
  }
`;
