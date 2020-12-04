import { execute } from 'graphql'
import gql from 'graphql-tag'
import { expect } from 'chai'
import { schema } from './app'

const GET_STATUS = gql`
  query GetStatus {
    status
  }
`

describe('status', () => {
  it('greets the planet', async () => {
    const { data } = await execute(schema, GET_STATUS)

    expect(data?.status).to.equal('Hello World')
  })
})
