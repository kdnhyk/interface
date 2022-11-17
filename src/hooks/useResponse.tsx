import { useState } from "react";

interface IsInitState {
  result: any;
  isPending: boolean;
  error: any;
  success: boolean;
}

const initState: IsInitState = {
  result: null,
  isPending: false,
  error: null,
  success: false,
};

export function useResponse() {
  const [response, setResponse] = useState(initState);

  const onStart = () => {
    setResponse({
      result: null,
      isPending: true,
      error: null,
      success: false,
    });
  };

  const onSuccess = (result?: any) => {
    setResponse({
      result: result,
      isPending: false,
      error: null,
      success: true,
    });
  };

  const onError = (error: string) => {
    setResponse({
      result: null,
      isPending: false,
      error: error,
      success: false,
    });
  };
  return { response, onStart, onSuccess, onError };
}
