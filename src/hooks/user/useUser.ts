import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../redux/slices/auth";
import {useEffect} from "react";
import {IAuthData} from "../../components/interfaces/auth/IAuth";
import {
  selectAnotherUserData,
  selectAnotherUserDataStatus,
  selectUserData,
  selectUserDataStatus } from "../../redux/slices/selectors/authSelectors";

export const useUser = (
  id: string | undefined
): [
  userData: IAuthData | null,
  getMe: IAuthData | null,
  isUserDataLoading: boolean,
  isGetMeLoading: boolean
] => {
  const dispatch = useDispatch<any>();
  const userData = useSelector(selectAnotherUserData);
  const getMe = useSelector(selectUserData);
  const isUserDataLoading = useSelector(selectAnotherUserDataStatus);
  const isGetMeLoading = useSelector(selectUserDataStatus);
  useEffect(() => {
    id !== undefined && dispatch(fetchUserById(id));
  }, [id]);

  return [userData, getMe, isUserDataLoading, isGetMeLoading];
};
