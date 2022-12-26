import styled from "styled-components";

export const StyledBannerSmall = styled.section`
  width: 77%;
  margin: auto;
  height: 32rem;
  border-radius: 0.9rem;
  margin: 0 auto 4.8rem auto;
  background: url("/assets/home/desktop/image-speaker-zx7.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 9.6rem;
  gap: 4rem;

  h4 {
    color: var(--black);
  }

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    height: 24.7rem;
    align-items: center;
    padding-left: 0;
  }
`;
