import styled from "styled-components";

export const StyledBannerLarge = styled.section`
  height: 59rem;
  background-color: var(--peach);
  width: 77%;
  margin: 4.8rem auto 4.8rem auto;
  border-radius: 0.9rem;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 990px) {
    height: 67.2rem;
    flex-direction: column;
  }

  .image-container {
    flex: 66.5rem;
    background-image: url("/assets/home/desktop/pattern-circles.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 990px) {
      flex: 27rem;
    }
  }
  img {
    height: 44.7rem;
    position: relative;
    bottom: -10px;

    @media screen and (max-width: 990px) {
      height: 23.8rem;
    }
  }

  .description {
    flex: 44.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 990px) {
      flex: 29rem;
      align-items: center;
      text-align: center;
    }

    h2,
    p {
      color: var(--white);
    }

    p {
      width: 40ch;
      @media screen and (max-width: 450px) {
        width: 80%;
      }
    }
  }
`;
