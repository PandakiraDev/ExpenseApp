import React from "react";

import { gql, useQuery } from "urql";

const ExpensesQuery = gql`
  query ExpensesQuery {
    expenses {
      id
      title
      date
      amount
      category
    }
  }
`;

const useExpensesQuery = () => {
  const [result, reexecuteQuery] = useQuery({
    query: ExpensesQuery,
  });

  return { result, reexecuteQuery };
};

export default useExpensesQuery;
