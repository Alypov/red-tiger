import styles from './styles.module.scss';
type UserProfileImageProps = {
  userImage: string;
};

export const UserProfileImage = ({ userImage }: UserProfileImageProps) => {
  const isOnline = true;
  return (
    <div className={styles.userProfileImage}>
      <div className={isOnline ? styles.onlineStatus : ''} />
      <img alt='' src={userImage} width='45px' height='45px' />
    </div>
  );
};
