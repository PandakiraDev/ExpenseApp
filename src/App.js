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
