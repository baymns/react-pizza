import React from "react";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import Categories from "./components/Categories";
import PizzaList from './components/PizzaList';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header />
        <Categories />
        <PizzaList />
      </div>
    </>
  );
}

export default App;
