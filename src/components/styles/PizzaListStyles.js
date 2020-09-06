import styled from 'styled-components';

export const PizzaListStyles = styled.div`
  .pizza-list {
    & > div {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(4, auto);
      justify-items: center;
    }
    &__title {
      margin: 0;
    }
  }
`
