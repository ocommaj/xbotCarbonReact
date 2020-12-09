import { useQuery, gql } from '@apollo/client';

export default function useArticlesQuery({ input, pattern }) {
  const {
    error,
    data: queryResponse,
    loading: queryLoading
  } = useQuery(pattern, { variables: { input } });

  return { queryResponse, error, queryLoading };
};
