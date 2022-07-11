import { useQuery } from 'react-query';
import { getDataUsers } from 'services/users';

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery('/users', getDataUsers, {
    onSuccess() {},
  });

  return {
    users: data,
    isLoading,
  };
};
