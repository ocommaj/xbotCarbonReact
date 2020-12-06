import { useQuery, gql } from '@apollo/client';

export default function useArticlesQuery(input) {
  const ARTICLE_TILE = gql`
  fragment ArticleTile on Article {
    _id
    title
    content
  }
  `
  const GET_ARTICLES = gql`
    query GetTutorials($input: TutorialsQueryInput) {
      tutorials(input: $input) {
        cursor
        hasMore
        payload {
          collection
          articles {
            ...ArticleTile
          }
        }
      }
    }
    ${ARTICLE_TILE}
  `;

  return useQuery(GET_ARTICLES, { variables: { input } });
}
