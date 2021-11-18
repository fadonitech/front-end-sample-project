import { gql } from "@apollo/client";

export const LIST_BLOG_POSTS = gql`
  query {
    blogPosts {
      id
      isPublished
      title
      description
      author
      time
      date
      content
      image
    }
  }
`;

export const FIND_BLOG_POST = gql`
  query findBlogPost(
    $id: ID!
  ) {
    findBlogPost (
      id: $id
    ) { 
      id
      isPublished
      title
      description
      author
      time
      date
      content
      image
    }
  } 
`
