import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLModule } from '@graphql-modules/core'
import { graphqlHTTP } from 'express-graphql'
import gql from 'graphql-tag'
import * as express from 'express'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'

const App = new GraphQLModule({
  typeDefs: [
    gql`
      type Query {
        status: String!
      }
    `,
  ],
  resolvers: {
    Query: {
      status: () => 'Hello World',
    },
  },
})

const schema = makeExecutableSchema(App.forRoot({}))

const PORT = 3000

const app = express()

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.cli(), // TODO: production formatter
  }),
)

app.use(graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT)
