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
      if (error.code === 'ERR_BAD_RESPONSE') toast.error('User with this email already exists');
      else toast.error(error.message);
    },
  });

  return {
    addUser: mutateAsync,
    isCreating: isLoading,
  };
};
