import { useEffect, useRef } from 'react';

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('useEffect input');
    ref.current?.focus();
  });

  return ref;
};
