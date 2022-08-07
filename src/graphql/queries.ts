import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query MyQuery {
    games {
      title
      time
      addressLarge {
        latitude
        longitude
      }
      genre
      address
      situation {
        coverage
        floor
        net
      }
    }
  }
`
