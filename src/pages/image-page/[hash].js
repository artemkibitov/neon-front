import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import usePostApi from "@/components/hooks/usePostApi";

const ImagePage = () => {
  const { query: { hash } } = useRouter();
  const { postData, response, isLoading, error } = usePostApi();

  useEffect(() => {
    if (hash) {
      postData('/image/get', { hash })
    }
  }, [hash]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={'container mx-auto'}>
      <div className={'h-48 w-48'}>
        {response && (
          <div
            className={'p-52 bg-no-repeat bg-contain bg-center'}
            style={{ backgroundImage: `url(data:image/png;base64,${response})` }}></div>
        )}
      </div>
    </div>
  )
};

export default ImagePage;
