import { Client, cacheExchange, fetchExchange } from "urql";

export const client = new Client({
  url: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljhc4y8w0i3s01un82hw2prc/master",
  exchanges: [cacheExchange, fetchExchange],
});
