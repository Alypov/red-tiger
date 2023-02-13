import React from 'react';
import styles from './styles.module.scss';
type UserProfileImage = {
  userImage: string;
};

export const UserProfileImage = ({ userImage }: UserProfileImage) => {
  const isOnline = true;
  return (
    <div className={styles.userProfileImage}>
      <div className={isOnline ? styles.onlineStatus : ''} />
      <img src={userImage} width='45px' height='45px' />
    </div>
  );
};
