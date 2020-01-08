// import _ from "lodash";
import { createContext } from "react";

export type IState = {};

export type IAction = {
  type: "setX" | "setY";
  actions: any;
};

export const initState: IState = {};

export const reducer = (state: IState, action: IAction) => {
  console.log("----current action----");
  console.log(action);

  switch (action.type) {
    case "setX":
      return {
        ...state
      };
    case "setY":
      return {
        ...state
      };
    default:
      return state;
  }
};

export type Reducer = {
  state: IState,
  dispatch: React.Dispatch<IAction>
}

export const ReducerContext = createContext<Reducer>({
  state: initState,
  dispatch: () => {}
});
