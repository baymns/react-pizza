import styled from 'styled-components';

export const PizzaCardStyles = styled.div`
  .card {
    width: 280px;
    height: 460px;
    margin-top: 35px;
    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__pizza-img {
      display: block;
    }
    &__name {
      margin: 10px 0 0;
      font-size: 1.25rem;
      text-align: center;
      letter-spacing: 0.01em;
    }
    &__options {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      background-color: #f3f3f3;
      border-radius: 10px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-top: 22px;
      padding: 6px;
      
      & ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
      }
      
      & ul:first-of-type {
        margin-bottom: 6px;
      }
      
      & ul li {
        padding: 8px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      & ul li.active {
        background: #ffffff;
        -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
    }
    &__add {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      .card__price {
        font-size: 1.375rem;
        font-weight: bold;
      }
      
      &-btn, &-btn-empty {
        width: 155px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #eb5a1e;
        box-sizing: border-box;
        border-radius: 30px;
        background: transparent;
        font-size: 1rem;
        font-weight: bold;
        font-family: 'Proxima Nova';
        color: #eb5a1e;
        &-empty {
          width: 132px;
          height: 40px;
          justify-content: center;
        }
        &-icon-empty {
          margin-right: 7px;
          svg path {
            fill: #eb5a1e;
          }
        }
        &:hover {
          background-color: #eb5a1e;
          color: #fff;
          cursor: pointer;
          .card__add-btn-icon svg path, .card__add-btn-icon-empty svg path {
            fill: #fff;
          }
        }
        &-icon {
          padding-left: 15px;
          svg path {
            fill: #eb5a1e;
          }
        }
        &-counter {
          width: 22px;
          height: 22px;
          line-height: 22px;
          border-radius: 50%;
          color: #fff;
          background-color: #eb5a1e;
          margin-right: 15px;
          text-align: center;
          font-size: 13px;
        }
      }
    }
  }
  
`
