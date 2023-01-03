import React from "react";
import { useUser } from "../../../hooks/user/useUser";
import { UserPage } from "../UserPage";
import { useParams } from "react-router-dom";

interface UserProfileProps {
  anotherUser?: boolean;
  isMyProfile?: boolean;
}

export const UserProfile = ({ anotherUser, isMyProfile }: UserProfileProps) => {
  const match = useParams();
  const [userData, getMe, isUserDataLoading, isGetMeLoading] = useUser(
    match.id
  );
  if (anotherUser) {
    return (
      <>
        {!isUserDataLoading && (
          <UserPage
            userData={getMe}
            anotherUserData={userData}
            isMyProfile={false}
          />
        )}
      </>
    );
  }
  return <>{<UserPage userData={getMe} isMyProfile={isMyProfile} />}</>;
};
