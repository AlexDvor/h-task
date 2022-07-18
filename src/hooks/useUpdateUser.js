import { useMutation, useQueryClient } from 'react-query';
import { updateUserByID } from 'services/users';
import { toast } from 'react-toastify';

export const useUpdateUsers = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(updateUserByID, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      toast.success('User was successfully updated');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return {
    updateUser: mutateAsync,
    isUpdating: isLoading,
  };
};
