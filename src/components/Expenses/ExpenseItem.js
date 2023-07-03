import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { convertCategoryName } from "../../utils/convertCategoryName";

const ExpenseItem = (props) => {
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
      </Card>
    </li>
  );
};

export default ExpenseItem;
