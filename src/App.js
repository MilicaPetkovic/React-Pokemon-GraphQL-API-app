import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Pokemons from "./components/Pokemons";

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Pokemons}></Route>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
