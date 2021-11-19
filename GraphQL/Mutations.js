import { gql } from '@apollo/client';

export const CREATE_CONTACT = gql`
  mutation createContact (
    $firstName: String!
    $lastName: String!
    $email: String!
    $plan: String!
  ) {
    createContact (
      firstName: $firstName
      lastName: $lastName
      email: $email
      plan: $plan
    ) {
      error
      title
      message
    }
  }
`

export const SINGLE_UPLOAD = gql`
  mutation(
    $file: Upload!
  ) {
    singleUpload(
      file: $file
    ) {
      filename
      mimetype
      encoding
      url
    }
  }
`;