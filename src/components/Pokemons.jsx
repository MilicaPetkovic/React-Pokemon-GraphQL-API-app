import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card from "./Card";

const POKE_QUERY = gql`
  {
    pokemons(first: 50) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

const Pokemons = () => {
  return (
    <>
      <Query query={POKE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error</div>;

          const itemsToRender = data.pokemons;

          console.log(itemsToRender);

          return (
            <div>
              <h1 style={{ textAlign: "center" }}>Pokemons</h1>
              {itemsToRender.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default Pokemons;
