import React, { useState } from "react";
import "./ExpenseForm.css";
import { gql, useMutation } from "urql";
import useExpensesQuery from "../../hooks/ExpensesQueryHook";
import { categoryNames } from "../../constants/categoryNames";

const categoryOptions = [
  {
    label: "Życie",
    value: "life",
  },
  {
    label: "Paliwo",
    value: "gas",
  },
  {
    label: "Inne",
    value: "other",
  },
  {
    label: "Opłaty",
    value: "fees",
  },
  {
    label: "Przychody",
    value: "income",
  },
];

const createExpenseMutation = gql`
  mutation CreateExpense(
    $title: String!
    $amount: Int!
    $date: Date!
    $category: String!
  ) {
    createExpense(
      data: { title: $title, amount: $amount, date: $date, category: $category }
    ) {
      id
    }
  }
`;

const publishExpenseMutation = gql`
  mutation UpdateExpense($id: ID!) {
    publishExpense(to: PUBLISHED, where: { id: $id }) {
      id
    }
  }
`;

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setEnteredCategory] = useState(
    categoryOptions[0].value
  );
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const [createExpenseResult, createExpense] = useMutation(
    createExpenseMutation
  );

  const [publishExpenseResult, publishExpense] = useMutation(
    publishExpenseMutation
  );

  const { reexecuteQuery } = useExpensesQuery();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "date") {
  //       setEnteredDate(value);
  //     } else if (identifier === "amount") {
  //       setEnteredAmount(value);
  //     }
  //   };

  const sumbitHandler = async (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      category: enteredCategory,
    };

    const newExpense = await createExpense(expenseData);

    await publishExpense({ id: newExpense.data.createExpense.id });

    await reexecuteQuery();

    // props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredCategory("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tytuł:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />  */}
        </div>
        <div className="new-expense__control">
          <label>Wartość:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2026-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Kategoria:</label>
          <select value={enteredCategory} onChange={categoryChangeHandler}>
            {categoryOptions.map((category, index) => (
              <option key={index} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Wstecz
        </button>
        <button type="submit">Dodaj nowy wydatek</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
