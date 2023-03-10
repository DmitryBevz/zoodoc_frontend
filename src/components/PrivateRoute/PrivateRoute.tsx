import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Role } from "../interfaces/auth/IAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsUserDataLoading,
  selectUserData,
} from "../../redux/slices/user/selectors/userSelectors";
import { fetchAuth } from "../../redux/slices/user/user";
import { Typography } from "@mui/material";

type ElementsRolemapping = {
  [key in Role]?: JSX.Element;
};

const PrivateRoute: React.FC<{
  children?: JSX.Element;
  roles?: Role[];
  elementsMapping?: ElementsRolemapping;
}> = ({ children, roles, elementsMapping }) => {
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const isLoading = useSelector(selectIsUserDataLoading);
  const userData = useSelector(selectUserData);

  React.useEffect(() => {
    dispatch(fetchAuth());
  }, [localStorage.getItem("zoodocToken")]);

  const isInRole = (userRoles: Role[] | undefined) => {
    return (
      userRoles?.some((userRole: Role) =>
        userData?.roles.some((name: Role) => Boolean(name === userRole))
      ) ?? true
    );
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (userData) {
    if (isInRole(roles)) {
      if (elementsMapping) {
        return <>{elementsMapping[userData.roles[0]]}</>;
      }
      return <>{children}</>;
    } else {
      return (
        <Typography>You do not have permission to view this page</Typography>
      );
    }
  } else {
    return (
      <Navigate to="/sign-in" replace state={{ path: location.pathname }} />
    );
  }
};

export default PrivateRoute;
