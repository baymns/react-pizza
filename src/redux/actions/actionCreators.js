import { ADD_PIZZA, TOGGLE_DOUGH, TOGGLE_DIAMETER } from "./actionTypes"

export const addPizza = (id) => {
  return {
    type: ADD_PIZZA,
    payload: id
  } 
}

export const toggleDough = (id, thickness) => {
  return {
    type: TOGGLE_DOUGH,
    payload: {id, thickness}
  } 
}

export const toggleDiameter = (id, size) => {
  return {
    type: TOGGLE_DIAMETER,
    payload: {id, size}
  } 
}
