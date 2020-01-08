import React from "react";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import pg from "../package.json";
import Home from "./pages/home";

export interface RouteType {
  routerPath: string;
  pageTitle: string;
  component: React.ComponentType;
  role?: "DIRECTOR" | "KEYBOARDER" | "TEAM_CONNECTOR";
  cache?: boolean;
}

const rootPath = pg.homepage;
const history = createBrowserHistory()

export const routes: RouteType[] = [
  {
    routerPath: "index",
    pageTitle: "sketchpad",
    component: Home
  }
];

function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route: RouteType, index: number) => {
          const CustomRoute = Route;
          return (
            <CustomRoute
              key={index}
              exact={true}
              path={`${rootPath}/${route.routerPath}`}
              component={route.cache ? undefined : route.component}
              role={route.role || ""}
            />
          );
        })}
        <Redirect to={`${rootPath}/index`} />
      </Switch>
    </Router>
  );
}

export const getRootPath = () => pg.homepage;

export default AppRouter;
