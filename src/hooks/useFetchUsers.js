import { useQuery } from 'react-query';
import { getDataUsers } from 'services/users';
import { toast } from 'react-toastify';

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery('/users', getDataUsers, {
    onSuccess() {
      // toast.success('User data was successfully updated');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    users: data,
    isFetchingUser: isLoading,
  };
};
