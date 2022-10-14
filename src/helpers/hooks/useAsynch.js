import { useReducer, useRef, useCallback } from "react";
import useSafeDispatch from "./useSafeDispatch";

const defaultState = { data: null, status: "idle", error: null };

export default function useAsynch(initialState) {
   const initialStateReff = useRef({ ...defaultState, ...initialState });

   const [{ data, status, error }, setstate] = useReducer((state, action) => {
      return { ...state, ...action };
   }, initialStateReff.current);

   const safeState = useSafeDispatch(setstate);

   const run = useCallback(
      (promise) => {
         if (!promise || !promise.then)
            throw new Error("The Argument Must be a Promise");
         safeState({ status: "pending" });
         return promise.then(
            (data) => {
               safeState({ data, status: "resolve" });
               return data;
            },
            (error) => {
               safeState({
                  status: "rejected",
                  error: JSON.parse(error.message),
               });
            }
         );
      },
      [safeState]
   );

   const setData = useCallback(
      (data) => {
         safeState({ data });
      },
      [safeState]
   );

   const setError = useCallback(
      (error) => {
         safeState({ error });
      },
      [safeState]
   );

   const reset = useCallback(() => {
      safeState(initialStateReff.current);
   }, [safeState]);

   return {
      data,
      status,
      error,
      run,
      setData,
      setError,
      reset,
      isIdle: status === "idle",
      isLoading: status === "idle" || status === "pending",
      iserror: status === "rejected",
      isSuccess: status === "resolve",
   };
}
