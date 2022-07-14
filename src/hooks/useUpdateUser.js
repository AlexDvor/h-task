import { useMutation, useQueryClient } from 'react-query';
import { updateUserByID } from 'services/users';
import { toast } from 'react-toastify';

export const useUpdateUsers = (id, newData) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(updateUserByID, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      toast.success('User was successfully updated');
    },
    // onError() {
    //   toast.error('User was successfully updated');
    // }
  });

  return {
    updateUserById: mutateAsync,
    isUpdating: isLoading,
  };
};
