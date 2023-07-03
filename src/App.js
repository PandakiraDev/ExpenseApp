import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { categoryNames } from "./constants/categoryNames";
import {
  Client,
  Provider,
  cacheExchange,
  fetchExchange,
  gql,
  useQuery,
} from "urql";
import { client } from "./utils/graphQlClient";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Ubezpieczenie samochodu",
    amount: 958.76,
    date: new Date(2023, 6, 24),
    category: categoryNames.get("car").value,
  },
  {
    id: "e2",
    title: "Paliwo",
    amount: 489.43,
    date: new Date(2021, 0, 14),
    category: categoryNames.get("car").value,
  },
  {
    id: "e3",
    title: "Żywność",
    amount: 1354.11,
    date: new Date(2019, 11, 11),
    category: categoryNames.get("life").value,
  },
  {
    id: "e4",
    title: "Chemia",
    amount: 693.09,
    date: new Date(2022, 5, 30),
    category: categoryNames.get("life").value,
  },
  {
    id: "e5",
    title: "Ubrania",
    amount: 267.03,
    date: new Date(2020, 7, 1),
    category: categoryNames.get("clothes").value,
  },
  {
    id: "e6",
    title: "Cos",
    amount: 867.03,
    date: new Date(2019, 5, 8),
    category: categoryNames.get("life").value,
  },
  {
    id: "e7",
    title: "cos2",
    amount: 67,
    date: new Date(2020, 4, 24),
    category: categoryNames.get("car").value,
  },
  {
    id: "e8",
    title: "gdd",
    amount: 1267.45,
    date: new Date(2021, 1, 6),
    category: categoryNames.get("car").value,
  },
  {
    id: "e9",
    title: "sdv",
    amount: 547.78,
    date: new Date(2022, 2, 11),
    category: categoryNames.get("life").value,
  },
  {
    id: "e10",
    title: "jfhg",
    amount: 177,
    date: new Date(2023, 3, 21),
    category: categoryNames.get("clothes").value,
  },
];

const App = () => {
  return (
    <Provider value={client}>
      <div>
        <NewExpense />
        <Expenses />
      </div>
    </Provider>
  );
};

export default App;
