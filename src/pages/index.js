import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectToHome = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return null;
};

export default RedirectToHome;
