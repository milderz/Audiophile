import styled from "styled-components";

export const StyledBannerSmallTwoCol = styled.section`
  width: 77%;
  margin: auto;
  height: 32rem;
  border-radius: 0.9rem;
  margin: 0 auto 4.8rem auto;
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    height: 48.3rem;
    flex-direction: column;
  }

  .image {
    flex: 1;
    background: url("assets/home/desktop/image-earphones-yx1.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 0.9rem;
  }

  .text-content {
    flex: 1;
    background-color: #f1f1f1;
    border-radius: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 600px) {
      align-items: center;
    }
    h4,
    a {
      margin-left: 9.6rem;

      @media screen and (max-width: 992px) {
        margin-left: 3.6rem;
      }
      @media screen and (max-width: 600px) {
        margin-left: 0;
      }
    }
  }
`;
