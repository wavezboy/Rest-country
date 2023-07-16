import { Children, createContext, useContext, useState } from "react";

interface DataProviderProps {
  children: React.ReactNode;
}

interface contextValueProps {
  love: string;
  setLove: React.Dispatch<React.SetStateAction<string>>;
  abc: string;
}

const DataContext = createContext<contextValueProps>({} as contextValueProps);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [love, setLove] = useState("okay");

  let abc = "hello i ove you";

  return (
    <DataContext.Provider
      value={{
        abc,
        love,
        setLove,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
