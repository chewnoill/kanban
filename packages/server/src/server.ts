import { makeExecutableSchema } from "graphql-tools";
import { GraphQLModule } from "@graphql-modules/core";
import { graphqlHTTP } from "express-graphql";
import gql from "graphql-tag";
const express = require("express");

const App = new GraphQLModule({
  typeDefs: [
    gql`
      type Query {
        status: String!
      }
    `
  ],
  resolvers: {
    Query: {
      status: () => "Hello World"
    }
  }
});

const schema = makeExecutableSchema(App.forRoot({}));

const PORT = 3000;

const app = express();
app.use(graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT);
