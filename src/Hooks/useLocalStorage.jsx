import React, { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : defaultValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, setValue];
}
