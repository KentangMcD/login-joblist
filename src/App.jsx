import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";

import Header from "./components/Header";
import JoblistPath from "./page/JobListPath";
import JobDescription from "./components/JobDescription";
import Login from "./components/login";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/util/PrivateRoute";
/* eslint-disable react/no-unescaped-entities */
const App = () => {
  const isLogin = localStorage.getItem("isLogin");
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    if (isLogin) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
    const intervalId = setInterval(() => {
      const newIsLogin = localStorage.getItem("isLogin");

      if (newIsLogin) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isLogin]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: 
        <Login/>
      ,
    },
    {
      path: "/jobs",
      element: <Header />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute isAllowed={isAllowed}>
              <JoblistPath />
            </PrivateRoute>
          ),
        },
        {
          path: ":id",
          element: (
            <PrivateRoute isAllowed={isAllowed}>
              <JobDescription />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/">
  //       <Route index element={<Login />}></Route>

  //       <Route path="home" index element={<Home />}></Route>
  //       <Route path="jobs" element={<Header />}>
  //         <Route index element={<JoblistPath />} />
  //         <Route path=":id" element={<JobDescription />} />
  //       </Route>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
};

export default App;
