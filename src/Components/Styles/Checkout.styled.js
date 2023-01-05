import styled from "styled-components";

export const StyledCheckout = styled.section`
  margin: 0 auto 14rem auto;
  width: 77%;

  max-width: 111rem;

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  .content {
    display: grid;
    grid-template-columns: 65% 31%;
    grid-gap: 3rem;

    @media screen and (max-width: 1080px) {
      grid-template-columns: 1fr;
    }
  }

  .two-col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;

    @media screen and (max-width: 675px) {
      flex-direction: column;
      align-items: flex-start;
    }

    label {
      flex: 1;
      width: 100%;
    }
  }

  .one-col-half {
    display: flex;
    gap: 1.6rem;

    label {
      flex: 0.485;
      width: 100%;
      @media screen and (max-width: 675px) {
        flex: 1;
      }
    }
  }
  .one-col-full {
    display: flex;
    label {
      flex: 1;
    }
  }

  .two-col-grid {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 2.8rem;

    @media screen and (max-width: 675px) {
      flex: 1;
      flex-direction: column;
    }

    p {
      flex: 1;
      font-weight: 700;
      font-size: 1.2rem;
    }

    fieldset {
      flex: 1;
    }
  }

  .checkout-form {
    border-radius: 0.9rem;
    background-color: var(--white);
    padding: 6rem 4.8rem;
    transition: all 0.2s ease;

    @media screen and (max-width: 675px) {
      padding: 2.8rem 1.8rem;
    }

    .form-title {
      color: var(--peach);
      font-size: 1.3rem;
      font-weight: 700;
      padding: 5.4rem 0 2.8rem 0;
    }

    label {
      display: inline-flex;
      flex-direction: column;
      /* background-color: aliceblue; */
      margin-bottom: 2.8rem;

      p {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
      }
    }

    input {
      height: 5.6rem;
      border-radius: 0.9rem;
      border: 1.6px solid #cfcfcf;
      background-color: transparent;
      font-size: var(--text-sm);
      color: var(--black);
      padding: 0 2.4rem;
      font-weight: 500;
      outline: 1.6px solid transparent;
      transition: all 0.2s ease;

      @media screen and (max-width: 675px) {
        padding: 0 1.4rem;
      }

      ::placeholder {
        color: #000;
        font-size: var(--text-sm);
        color: var(--black);
        font-weight: 500;
      }

      :-moz-placeholder {
        color: #000;
      }
      ::-moz-placeholder {
        color: #000;
      }

      :focus {
        outline: 1.6px solid var(--peach);
        border: 1.6px solid transparent;
      }
    }

    .cash-on-delivery {
      height: 12.2rem;

      display: flex;
      align-items: center;
      gap: 3.6rem;

      @media screen and (max-width: 675px) {
        height: auto;
      }
    }
  }

  fieldset {
    flex: 1;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .radio-button {
      height: 5.6rem;
      border: 1.6px solid #cfcfcf;
      border-radius: 0.9rem;
      padding: 0 2.4rem;
      display: flex;
      align-items: center;

      label {
        font-size: var(--text-sm);
        font-weight: 600;
        margin: 0 0 0 1.6rem;
        cursor: pointer;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      input {
        accent-color: var(--peach);
        cursor: pointer;
        height: 100%;
        border: none;
        outline: none;

        :focus {
          outline: none;
          border: none;
        }
      }
    }
  }

  .summary-form {
    border-radius: 0.9rem;
    background-color: var(--white);
    padding: 3.8rem 3.4rem;
    height: fit-content;

    @media screen and (max-width: 675px) {
      padding: 2.8rem 1.8rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      margin: 3.6rem 0;
      li {
        display: flex;

        img {
          flex: 6.4rem;
          background-position: center;
          background-size: cover;
          object-fit: cover;
          border-radius: 0.9rem;
          max-width: 6.4rem;
        }

        .product-cart-details {
          flex: 19.6rem;
          padding: 0 1.6rem;

          h4 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1.4rem;
            color: var(--light-black);
          }
        }

        .cart-qty {
          flex: 2.2rem;
          font-size: 1.8rem;
          display: grid;
          place-content: center;
          color: var(--light-black);
          max-width: 2.2rem;
        }
      }
    }

    .summary-cart-details {
      .summary-fields {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.2rem;
        p:nth-child(1) {
          color: var(--light-black);
        }
        p:nth-child(2) {
          font-weight: 700;
        }
      }

      .summary-grand-total {
        display: flex;
        justify-content: space-between;
        margin: 3.8rem 0 3.8rem 0;
        p:nth-child(1) {
          color: var(--light-black);
        }
        p:nth-child(2) {
          font-weight: 700;
          color: var(--peach);
        }
      }
    }

    a {
      width: 100%;
    }
  }
`;
