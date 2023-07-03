import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import useExpensesQuery from "../../hooks/ExpensesQueryHook";

const Expenses = (props) => {
  const { result, reexecuteQuery } = useExpensesQuery();

  const { data, fetching, error } = result;

  const [filteredMonth, setFilteredMonth] = useState("all");
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredCategory, setFilteredCategory] = useState("all");

  const filterMonthChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterCategoryChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredExpenses = data?.expenses
    .filter((expense) => {
      console.log(new Date(expense.date).getMonth().toString());
      console.log(filteredMonth);

      return (
        new Date(expense.date).getMonth().toString() === filteredMonth ||
        filteredMonth === "all"
      );
    })
    .filter((expense) => {
      return new Date(expense.date).getFullYear().toString() === filteredYear;
    })
    .filter((expense) => {
      return (
        expense.category === filteredCategory || filteredCategory === "all"
      );
    });

  if (fetching) return <p>Ładowanie...</p>;
  if (error) return <p>O nie...{error.message}</p>;
  // if (data) console.log(data);

  return (
    data?.expenses && (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedMonth={filteredMonth}
            onChangeFilterMonth={filterMonthChangeHandler}
            selectedYear={filteredYear}
            onChangeFilterYear={filterYearChangeHandler}
            selectedCategory={filteredCategory}
            onChangeFilterCategory={filterCategoryChangeHandler}
          />

          {/* {filteredExpenses.length === 0 && <p>Nie ma żadnych wydatków.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id} 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    )
  );
};

export default Expenses;
