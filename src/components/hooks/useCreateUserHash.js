import { useEffect } from 'react';
import usePostApi from './usePostApi';

const useCreateUserHash = () => {
  const { response, error, isLoading } = usePostApi(process.env.API_HOST + '/api/users/hash', { data: null });

  return { response, error, isLoading };
};

export default useCreateUserHash;
