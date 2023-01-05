import { createContext } from "react";
import useFetch from "../useFetch";

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const data = useFetch();
  return (
    <PhotoContext.Provider value={{ data }}>{children}</PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
