import { useState, useEffect } from 'react';

const useSizeOptions = (SignModel) => {
  const [sizeOptions, setSizeOptions] = useState(Array.from(SignModel.getSizeOption()));

  useEffect(() => {
    setSizeOptions(Array.from(SignModel.getSizeOption()));
  }, [SignModel]);

  return sizeOptions;
};

export default useSizeOptions;
