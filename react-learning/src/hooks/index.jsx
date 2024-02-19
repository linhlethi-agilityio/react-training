import { useContext } from "react";

export const useText = (context) => {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error("useSpicyState must be used within the context");
  }

  return ctx;
};
