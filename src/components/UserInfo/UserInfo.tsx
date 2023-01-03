import React from "react";
import {Link} from "react-router-dom";

import {Tooltip} from "@mui/material";

import {useStyles} from "./styles";
import Avatar from "@mui/material/Avatar";
import {IDocument} from "../interfaces/document/IDocumend";

interface IUserInfoProps {
    avatarUrl?: IDocument | undefined;
    fullName?: string;
    additionalText?: string | undefined;
    myProfile?: boolean;
    _id?: string;
  closeModal?: any;
}

export const UserInfo = ({avatarUrl, fullName, additionalText, myProfile, _id, closeModal}: IUserInfoProps) => {
    const styles = useStyles()
    const userInitials = fullName?.slice(0, 1);
    return (
        <div className={styles.root} onClick={closeModal}>
            <Link to={ `${myProfile ? '/profile': `/profile/${_id}`}` }>
                <Tooltip title="Відвідати профіль">
                  {!avatarUrl?.location ? (
                    <Avatar className={styles.avatar}>{userInitials}</Avatar>
                  ) : (
                    <Avatar className={styles.avatar} src={avatarUrl.location} />
                  )}
                </Tooltip>
            </Link>
            <div className={styles.userDetails}>
                <Link to={ `${myProfile ? '/profile': `/profile/${_id}`}` }>
                    <Tooltip title="Відвідати профіль">
                        <span className={styles.userName}>{fullName}</span>
                    </Tooltip>
                </Link>
                <span className={styles.additional}>{additionalText}</span>
            </div>
        </div>
    );
};
