import React, { useReducer } from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import zhCn from "antd/lib/locale/zh_CN";
import AppRouter from "./router";
import { initState, reducer, ReducerContext } from "./utils/reducerContext";

const AppProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ReducerContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCn}>
      <AppProvider>
        <AppRouter></AppRouter>
      </AppProvider>
    </ConfigProvider>
  );
};

export default App;
