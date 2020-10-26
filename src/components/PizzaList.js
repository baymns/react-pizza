import React from "react";
import { useSelector } from "react-redux";
import PizzaCard from "./PizzaCard";
import { PizzaListStyles } from "./styles/PizzaListStyles";
import { PizzaCardStyles } from "./styles/PizzaCardStyles";

const PizzaList = () => {
  const pizzas = useSelector((state) => state.main.pizzas);
  return (
    <PizzaListStyles>
      <div className="pizza-list">
        <h1 className="pizza-list__title">Все пиццы</h1>
        <PizzaCardStyles>
          {pizzas &&
            pizzas.map(
              ({ id, imgSrc, name, dough, diameter, price, counter }) => (
                <PizzaCard
                  key={id}
                  id={id}
                  img={imgSrc}
                  name={name}
                  dough={dough}
                  diameter={diameter}
                  price={price}
                  counter={counter}
                />
              )
            )}
        </PizzaCardStyles>
      </div>
    </PizzaListStyles>
  );
};

export default PizzaList;
