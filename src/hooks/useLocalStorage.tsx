import { useState } from "react";

/**
 * A custom hook to manage localStorage with React state.
 * 
 * @template T
 * @param {string} keyName - The key to store the value under in localStorage.
 * @param {T} defaultValue - The default value to use if the key is not found in localStorage.
 * @returns {[T, (newValue: T) => void]} A stateful value and a function to update it.
 */
function useLocalStorage<T>(keyName: string, defaultValue: T): [T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return /** @type {T} */ (JSON.parse(value));
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  /**
   * Sets a new value in localStorage and updates the state.
   * 
   * @param {T} newValue - The new value to set in localStorage and state.
   */
  const setValue = (newValue: T): void => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;