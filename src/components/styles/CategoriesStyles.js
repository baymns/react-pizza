import styled from 'styled-components';

export const CategoriesStyles = styled.div`
  .categories-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }
  .categories ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
  }

  .categories ul li {
    background-color: #f9f9f9;
    padding: 13px 30px;
    border-radius: 30px;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
    -webkit-transition: background-color 0.1s ease-in-out;
    transition: background-color 0.1s ease-in-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .categories ul li:hover {
    background-color: #f4f4f4
  }

  .categories ul li:active {
    background-color: #ececec
  }

  .categories ul li.active {
    background-color: #282828;
    color: #fff
  }

  .sort {
    position: relative;
    line-height: 
  }

  .sort__label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .sort__label svg {
    margin-right: 8px
  }

  .sort__label b {
    margin-right: 8px
  }

  .sort__label span {
    color: #fe5f1e;
    border-bottom: 1px dashed #fe5f1e;
    cursor: pointer
  }

  .sort__popup {
    position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    width: 160px
  }

  .sort__popup ul {
    overflow: hidden;
    padding: 0;
  }

  .sort__popup ul li {
    padding: 12px 20px;
    cursor: pointer;
    list-style: none;
  }

  .sort__popup ul li.active,
  .sort__popup ul li:hover {
    background: rgba(254, 95, 30, 0.05)
  }

  .sort__popup ul li.active {
    font-weight: bold;
    color: #fe5f1e
  }
`;
