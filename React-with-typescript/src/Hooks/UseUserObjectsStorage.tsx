import { useEffect, useState } from "react";

function useUserObjects(
  key: string,
  initialValue: { name: string; email: string },
): [
  { name: string; email: string },
  (value: { name: string; email: string }) => void,
] {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return initialValue;
    }

    try {
      return JSON.parse(stored);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useUserObjects;
