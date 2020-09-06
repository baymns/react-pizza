import styled from 'styled-components';

export const HeaderStyle = styled.div`
  .header {
    width: 100%;
    height: 137px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F7F7F7;
    .logo {
      width: 318px;
      height: 48px;
      display: flex;
      justify-content: flex-start;
      padding: 49px 0 40px 0;
      .img {
        &__svg {
          padding: 5px 0;
        }
      }
      .title {
        padding-left: 17px;
        &__header {
          height: 29px;
          line-height: 29px;
          margin: 0;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        &__tagline {
          height: 19px;
          line-height: 19px;
          font-style: normal;
          font-weight: normal;
          font-size: 1rem;
          color: #7B7B7B;
          margin: 0;
        }
      }
    }
    .cart-button {
      display: flex;
        justify-content: space-between;
        align-items: center;
      &__button {
        width: 160px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FE5F1E;
        font-family: 'Proxima Nova';
        border-radius: 30px;
        border: none;
        outline: none;
        &:hover {
          background-color: #f77445;
          cursor: pointer;
        }
      }
      &__sum-counter {
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        padding: 0 8px 0 23px;
        width: 33%;
      }
      &__separator {
        width: 1px;
        height: 25px;
        background: rgba(255, 255, 255, 0.25);
        margin: 12px 0;
        }
      &__cart {
        display: flex;
        flex-direction: row;
        padding: 0 20px 0 8px;
        width: 33%;

        &-icon {
          padding-right: 0.5rem;
        }
        &-counter {
          font-weight: bold;
          font-size: 1rem;
          color: #fff;
          }
        }
    }
  }
`;
