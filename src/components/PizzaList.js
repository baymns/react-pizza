import React from "react";
import PizzaCard from "./PizzaCard";
import { PizzaListStyles } from "./styles/PizzaListStyles";
import { PizzaCardStyles } from './styles/PizzaCardStyles';
import pizza1 from '../assets/pizza1.png';
import pizza2 from '../assets/pizza2.png';
import pizza3 from '../assets/pizza3.png';
import pizza4 from '../assets/pizza4.png';

const PizzaList = () => {
  const pizzas = [
    {
      imgSrc: pizza1,
      name: 'Чизбургер-пицца',
      price: 350,
      counter: 0,
    },
    {
      imgSrc: pizza2,
      name: 'Сырная',
      price: 450,
      counter: 0,
    },
    {
      imgSrc: pizza3,
      name: 'Креветки по-азиатски',
      price: 290,
      counter: 0,
    },
    {
      imgSrc: pizza4,
      name: 'Сырный цыпленок',
      price: 385,
      counter: 0,
    },
    {
      imgSrc: pizza1,
      name: 'Чизбургер-пицца',
      price: 350,
      counter: 0,
    },
    {
      imgSrc: pizza2,
      name: 'Сырная',
      price: 450,
      counter: 0,
    },
    {
      imgSrc: pizza3,
      name: 'Креветки по-азиатски',
      price: 290,
      counter: 0,
    },
    {
      imgSrc: pizza4,
      name: 'Сырный цыпленок',
      price: 385,
      counter: 0,
    },
  ]
  return (
    <PizzaListStyles>
      <div className="pizza-list">
        <h1 className="pizza-list__title">Все пиццы</h1>
        <PizzaCardStyles>
          {pizzas.map(pizza => <PizzaCard img={pizza.imgSrc} name={pizza.name} price={pizza.price} counter={pizza.counter} />)}
        </PizzaCardStyles>
      </div>
    </PizzaListStyles>
  );
};

export default PizzaList;
