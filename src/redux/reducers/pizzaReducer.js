import { ADD_PIZZA, TOGGLE_DOUGH, TOGGLE_DIAMETER } from "../actions/actionTypes";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";

let initialState = {
  pizzas: [
    {
      id: 0,
      imgSrc: pizza1,
      name: "Чизбургер-пицца",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 350,
      counter: 0,
    },
    {
      id: 1,
      imgSrc: pizza2,
      name: "Сырная",
      price: 450,
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      counter: 0,
    },
    {
      id: 2,
      imgSrc: pizza3,
      name: "Креветки по-азиатски",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 290,
      counter: 0,
    },
    {
      id: 3,
      imgSrc: pizza4,
      name: "Сырный цыпленок",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 385,
      counter: 0,
    },
    {
      id: 4,
      imgSrc: pizza1,
      name: "Чизбургер-пицца",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 350,
      counter: 0,
    },
    {
      id: 5,
      imgSrc: pizza2,
      name: "Сырная",
      price: 450,
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      counter: 0,
    },
    {
      id: 6,
      imgSrc: pizza3,
      name: "Креветки по-азиатски",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 290,
      counter: 0,
    },
    {
      id: 7,
      imgSrc: pizza4,
      name: "Сырный цыпленок",
      dough: {
        slim: true,
        traditional: false,
      },
      diameter: {
        small: true,
        medium: false,
        large: false,
      },
      price: 385,
      counter: 0,
    },
  ],
  cart: {
    items: [],
    total: 0,
  },
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      const order = state.pizzas.find((pizza) => pizza.id === action.payload);
      const items = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload) {
          pizza.counter += 1;
        }
        return pizza;
      });
      return {
        ...state,
        pizzas: items,
        cart: {
          ...state.cart,
          items: [...state.cart.items, order],
          total: state.cart.total + order.price,
        },
      };
    case TOGGLE_DOUGH:
      const pizzaList = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          if (action.payload.thickness === "traditional") {
            pizza.dough.slim = false;
            pizza.dough.traditional = true;
          } else {
            pizza.dough.traditional = false;
            pizza.dough.slim = true;
          }
        }
        return pizza;
      });
      return {
        ...state,
        pizzas: pizzaList,
      };
    case TOGGLE_DIAMETER:
      const pizzas = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          if (action.payload.size === "small") {
            pizza.diameter.small = true;
            pizza.diameter.medium = false;
            pizza.diameter.large = false;
          } else if (action.payload.size === "medium") {
            pizza.diameter.small = false;
            pizza.diameter.medium = true;
            pizza.diameter.large = false;
          } else {
            pizza.diameter.small = false;
            pizza.diameter.medium = false;
            pizza.diameter.large = true;
          }
        }
        return pizza;
      });
      return {
        ...state,
        pizzas: pizzas,
      };

    default:
      return state;
  }
};
