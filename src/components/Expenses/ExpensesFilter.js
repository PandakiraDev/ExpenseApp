import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeYearHandler = (event) => {
    props.onChangeFilterYear(event.target.value);
  };

  const dropdownChangeCategoryHandler = (event) => {
    props.onChangeFilterCategory(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtrowanie po roku</label>
        <select value={props.selectedYear} onChange={dropdownChangeYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filtrowanie po kategorii</label>
        <select
          value={props.selectedCategory}
          onChange={dropdownChangeCategoryHandler}
        >
          <option value="life">Życie</option>
          <option value="car">Samochód</option>
          <option value="clothes">Ubrania</option>
          <option value="all">Wszystko</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
