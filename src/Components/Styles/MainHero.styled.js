import styled from "styled-components";

export const StyledMainHero = styled.section`
  height: 72.9rem;
  background: url("/assets/home/desktop/image-hero.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: brightness(0.9); */
  filter: ${({ contentDisabled }) => contentDisabled && "brightness(0.6)"};
  z-index: 1;
  position: relative;

  @media screen and (max-width: 990px) {
    background: url("/assets/home/tablet/image-hero.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 450px) {
    background: url("/assets/home/mobile/image-hero.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content {
    width: 77%;
    margin: auto;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.8rem;

    .headline {
      margin-bottom: -1.4rem;
    }

    h1 {
      color: var(--white);
      width: 10ch;
    }

    p {
      color: var(--dark-gray);
      width: 46ch;
      @media screen and (max-width: 500px) {
        width: 70%;
      }
    }

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 990px) {
      align-items: center;
      text-align: center;
    }
  }
`;
