import React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Header, Modal } from "./components";
import { GetAuth, Home, Login, Registration } from "./pages";
import { Layout } from "./pages/Layout/Layout";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Role } from "./components/interfaces/auth/IAuth";
import { fetchAuth } from "./redux/slices/user/user";

const App = () => {
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    dispatch(fetchAuth());
  }, [localStorage.getItem("zoodocToken")]);

  return (
    <>
      <Modal />
      <Header />
      {/* <ToastContainer limit={3} /> */}
      <Container maxWidth="lg">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/sign-in" element={<GetAuth />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute
                  roles={[Role.Doctor, Role.Patient]}
                  elementsMapping={{
                    0: <Home />,
                    1: <Home />,
                  }}
                />
              }
            />
            {/* <Route
              path="/profiles-list"
              element={
                <PrivateRoute roles={[Role.Employee]}>
                  <ProfilesListTable />
                </PrivateRoute>
              }
            /> */}
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
