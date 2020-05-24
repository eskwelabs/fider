import "./UserName.scss";

import React from "react";
import { isCollaborator, UserRole } from "@fider/models";
import { classSet } from "@fider/services";

interface UserNameProps {
  user: {
    id: number;
    name: string;
    role?: UserRole;
  };
  hidden?: boolean;
}

export const UserName = (props: UserNameProps) => {
  const className = classSet({
    "c-username": true,
    "m-staff": props.user.role && isCollaborator(props.user.role)
  });

  if(props.hidden) {
    return <small />;
  }


  return <span className={className}>{props.user.name || "Anonymous"}</span>;
};
