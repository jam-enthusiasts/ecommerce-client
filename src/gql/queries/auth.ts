import { gql } from 'apollo-boost';


const GET_USER = gql`
  query ($email: String!) {
    users (email: $email){
      email
      name
    }
  }
`

const GET_USERS = gql`
  query getUsers {
    users {
      email
      name
    }
  }
`


export { GET_USERS, GET_USER }