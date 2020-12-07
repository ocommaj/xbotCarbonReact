import { useQuery, gql } from '@apollo/client';

export default function useArticlesQuery(input) {
  const PREVIEW_TILE = gql`
  fragment PreviewTile on Article {
    _id
    title
  }
  `;

  const GET_POSTS = gql`
    query GetTutorials($input: TutorialsQueryInput) {
      tutorials(input: $input) {
        cursor
        hasMore
        payload {
          articles {
            ...PreviewTile
          }
        }
      }
    }
    ${PREVIEW_TILE}
  `;

  const {
    error,
    data: articles,
    loading: queryLoading
  } = useQuery(GET_POSTS, { variables: { input } });

  return { articles, error, queryLoading };
};
