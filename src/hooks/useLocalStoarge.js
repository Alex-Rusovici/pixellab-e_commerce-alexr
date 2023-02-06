import { cache, useEffect, useState } from 'react';

//keyName => key name in local storage

export const useLocalStorage = (keyName, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [cache, setCache] = useState('');

  useEffect(() => {
    console.log('I run once');
    // get "keyName" from localStorage
    const savedValue = localStorage.getItem(keyName);

    // check if there is a localStorage
    // if it is in localStorage, add to state

    if (savedValue !== null) {
      setValue(savedValue);
      setCache(savedValue);
    }
  }, [setValue, keyName]);

  useEffect(() => {
    // no early return
    if (value !== cache) {
      localStorage.setItem(keyName, value);
      setCache(value);
    }
  }, [value, keyName, cache]);

  return [value, setValue];
};
