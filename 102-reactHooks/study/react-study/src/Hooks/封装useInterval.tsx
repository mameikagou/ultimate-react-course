import { useLayoutEffect, useRef, useEffect, useCallback } from "react";

// 封装hook
// 这里通过useRef来避免闭包陷阱;
export const useInterval = (fn: () => void, delay: number | null) => {
  const callbackFn = useRef(fn);

  //   在渲染过程中不要更改ref.current; 包一层放到渲染之后;
  useLayoutEffect(() => {
    callbackFn.current = fn;
  });

  const cleanUpFnRef = useRef<() => void>();
  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => callbackFn.current(), delay || 0);
    cleanUpFnRef.current = () => clearInterval(timer);
    return () => {
      clean;
    };
  }, []);
  return clean;
};
