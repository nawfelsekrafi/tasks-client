import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import LoadingScreen from "./components/LoadingScreen";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: "/404",
    component: () => <Redirect to="/" />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: "/login",
    component: lazy(() => import("./pages/Auth/LoginView")),
  },
  {
    path: "/",
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      // {
      //   exact: true,
      //   path: "/",
      //   component: lazy(() => import("./pages/Test")),
      // },
      // {
      //   exact: true,
      //   path: "/magazine",
      //   component: lazy(() => import("./pages/Magazine")),
      // },
      {
        path: "*",
        component: lazy(() => import("./pages/Auth/NotFound")),
      },
    ],
  },
];

export default routes;
