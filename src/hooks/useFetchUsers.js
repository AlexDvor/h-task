import { useQuery } from 'react-query';
import { getDataUsers } from 'services/users';
import { toast } from 'react-toastify';

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery('/users', getDataUsers, {
    onSuccess() {
      if (data) toast.success('User data was successfully updated');
    },
  });

  return {
    users: data,
    isLoading,
  };
};
