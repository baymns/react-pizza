import React from "react";
import { useDispatch } from "react-redux";
import {
  addPizza,
  toggleDough,
  toggleDiameter,
} from "../redux/actions/actionCreators";

const PizzaCard = ({ id, img, name, dough, diameter, price, counter }) => {
  const dispatch = useDispatch();
  const addClass = counter
    ? { parent: "card__add-btn", child: "card__add-btn-icon" }
    : { parent: "card__add-btn_empty", child: "card__add-btn-icon_empty" };
  const handlerAddPizza = () => {
    dispatch(addPizza(id));
  };
  const handlerToggleDough = (id, type) => {
    dispatch(toggleDough(id, type));
  };
  const handlerToggleDiameter = (id, type) => {
    dispatch(toggleDiameter(id, type));
  };
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} className="card__pizza-img" alt="pizza" />
      </div>
      <h2 className="card__name">{name}</h2>
      <div className="card__options">
        <ul>
          <li
            className={dough.slim ? "active" : ""}
            onClick={() => handlerToggleDough(id, "slim")}
          >
            тонкое
          </li>
          <li
            className={dough.traditional ? "active" : ""}
            onClick={() => handlerToggleDough(id, "traditional")}
          >
            традиционное
          </li>
        </ul>
        <ul>
          <li
            className={diameter.small ? "active" : ""}
            onClick={() => handlerToggleDiameter(id, "small")}
          >
            26 см.
          </li>
          <li
            className={diameter.medium ? "active" : ""}
            onClick={() => handlerToggleDiameter(id, "medium")}
          >
            30 см.
          </li>
          <li
            className={diameter.large ? "active" : ""}
            onClick={() => handlerToggleDiameter(id, "large")}
          >
            40 см.
          </li>
        </ul>
      </div>
      <div className="card__add">
        <div className="card__price">от {price} ₽</div>
        <div className={addClass.parent} onClick={handlerAddPizza}>
          <div className={addClass.child}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="card__add-btn-title">Добавить</div>
          {counter ? (
            <div className="card__add-btn-counter">{counter}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
