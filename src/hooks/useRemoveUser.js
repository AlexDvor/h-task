import { useMutation, useQueryClient } from 'react-query';
import { removeUserByID } from 'services/users';
import { toast } from 'react-toastify';

export const useRemoveUsers = id => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeUserByID, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      toast.success('User was successfully deleted');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    removeUserById: mutateAsync,
    isRemoving: isLoading,
  };
};
