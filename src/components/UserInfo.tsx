import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, username, email } = user;

  return (
    <>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </>
  );
};