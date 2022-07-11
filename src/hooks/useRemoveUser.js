import { useMutation, useQueryClient } from 'react-query';
import { removeUserByID } from 'services/users';

export const useRemoveUsers = id => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeUserByID, {
    onSuccess() {
      queryClient.invalidateQueries('/users');
      console.log('Remove operation was passed');
    },
  });

  return {
    removeUserById: mutateAsync,
    isRemoving: isLoading,
  };
};
