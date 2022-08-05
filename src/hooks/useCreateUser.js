import { useMutation, useQueryClient } from 'react-query';
import { createNewUser } from 'services/users';
import { toast } from 'react-toastify';

export const useCreateUser = id => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(createNewUser, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      toast.success('User was successfully added');
    },
    onError(error) {
      const { response } = error;
      if (response.data.message) toast.error(response.data.message);
      else toast.error(error.message);
    },
  });

  return {
    addUser: mutateAsync,
    isCreating: isLoading,
  };
};
