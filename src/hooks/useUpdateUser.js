import { useMutation, useQueryClient } from 'react-query';
import { updateUserByID } from 'services/users';

export const useRemoveUsers = (id, newData) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(updateUserByID, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      console.log('the Updating operation was successful');
    },
  });

  return {
    updateUserById: mutateAsync,
    isUpdating: isLoading,
  };
};
