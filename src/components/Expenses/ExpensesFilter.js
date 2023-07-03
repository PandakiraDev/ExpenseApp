import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeMonthHandler = (event) => {
    props.onChangeFilterMonth(event.target.value);
  };
  const dropdownChangeYearHandler = (event) => {
    props.onChangeFilterYear(event.target.value);
  };

  const dropdownChangeCategoryHandler = (event) => {
    props.onChangeFilterCategory(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filtrowanie po miesiącu</label>
        <select
          value={props.selectedMonth}
          onChange={dropdownChangeMonthHandler}
        >
          <option value="all">Wszystkie</option>
          <option value="0">Styczeń</option>
          <option value="1">Luty</option>
          <option value="2">Marzec</option>
          <option value="3">Kwiecień</option>
          <option value="4">Maj</option>
          <option value="5">Czerwiec</option>
          <option value="6">Lipiec</option>
          <option value="7">Sierpień</option>
          <option value="8">Wrzesień</option>
          <option value="9">Październik</option>
          <option value="10">Listopad</option>
          <option value="11">Grudzień</option>
        </select>
      </div>
      <div className="expenses-filter__control">
        <label>Filtrowanie po roku</label>
        <select value={props.selectedYear} onChange={dropdownChangeYearHandler}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
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
