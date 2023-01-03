import React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GetAuth, Header, Login, Modal, Registration } from "./components";
import { Home, EditProfile } from "./pages";

import { fetchAuthMe } from "./redux/slices/auth";
import { Layout } from "./pages/Layout/Layout";
import { UserProfile } from "./pages/UserPage/components/UserProfile";
import { ToastContainer } from "react-toastify";
import { selectIsAuth } from "./redux/slices/selectors/authSelectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch<any>();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Modal />
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/sign-in" element={<GetAuth />} />
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute dependOn={isAuth}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute dependOn={isAuth}>
                  <UserProfile isMyProfile={true} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/:id"
              element={
                <PrivateRoute dependOn={isAuth}>
                  <UserProfile isMyProfile={true} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute dependOn={isAuth}>
                  <UserProfile anotherUser={true} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/edit"
              element={
                <PrivateRoute dependOn={isAuth}>
                  <EditProfile />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Container>
      <ToastContainer limit={3} />
    </>
  );
}

export default App;
