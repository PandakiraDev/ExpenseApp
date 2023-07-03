import "./ExpenseTotal.css";

const ExpenseTotal = (props) => {
  const total = props.amounts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.amount,
    0
  );
  return (
    <div className="expense-total">
      <div className="expense-total-item">
        <h2>Suma: </h2>
      </div>
      <div className="expense-total-item">
        <h3>{total} zł</h3>
      </div>
    </div>
  );
};

export default ExpenseTotal;
