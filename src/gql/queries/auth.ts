import { gql } from 'apollo-boost';

const GET_USERS = gql`
  query getUsers {
    users {
      email
      name
    }
  }
`

export { GET_USERS }