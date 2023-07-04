import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { convertCategoryName } from "../../utils/convertCategoryName";
import { gql, useMutation } from "urql";

const deleteExpenseMutation = gql`
  mutation DeleteExpense($id: ID!) {
    deleteExpense(where: { id: $id }) {
      id
    }
  }
`;

const ExpenseItem = (props) => {
  const [deleteExpenseResult, deleteExpense] = useMutation(
    deleteExpenseMutation
  );

  const handleDeleteExpense = async (id) => {
    await deleteExpense({ id });
  };
  console.log(props);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price-and-category">
            <div className="expense-item__price">{props.amount} zł</div>
            <div className="expense-item__category">
              {convertCategoryName(props.category)}
            </div>
          </div>
        </div>
        <button
          className="expense-item__button"
          onClick={() => handleDeleteExpense(props.id)}
        >
          X
        </button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
