import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return {
    count,
    handleIncrement,
  };
};
