import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import SwitchGuard from "./components/SwitchGuard";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<></>}>
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
    exact: true,
    guard: GuestGuard,
    path: "/register",
    component: lazy(() => import("./pages/Auth/LoginView")),
  },
  {
    exact: true,
    guard: SwitchGuard,
    path: "/switch",
    component: lazy(() => import("./pages/Auth/Switch")),
  },
  {
    path: "/",
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("./pages/Dashboard")),
      },
      {
        exact: true,
        path: "/add-task",
        component: lazy(() => import("./pages/NewTask")),
      },
      {
        exact: true,
        path: "/my-tasks",
        component: lazy(() => import("./pages/MyTasks")),
      },
      {
        exact: true,
        path: "/tasks-shared-to-me",
        component: lazy(() => import("./pages/TasksSharedToMe")),
      },
      {
        exact: true,
        path: "/profile",
        component: lazy(() => import("./pages/Profile")),
      },
      {
        path: "*",
        component: lazy(() => import("./pages/Auth/NotFound")),
      },
    ],
  },
];

export default routes;
