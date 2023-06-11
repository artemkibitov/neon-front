import { useState } from 'react';

const usePostApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (path, data) => {
    path = process.env.API_HOST + path;
    setIsLoading(true);
    try {
      const res = await fetch(path, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResponse(json);
      console.log('json:',json);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, postData: fetchData };
};

export default usePostApi;
