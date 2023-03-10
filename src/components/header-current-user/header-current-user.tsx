import { Button } from '../../ui';
import { UserProfileImage } from '../user-profile-image';
import styles from './styles.module.scss';
export const HeaderCurrentUser = () => {
  return (
    <div className={styles.mainWrapper}>
      <UserProfileImage userImage='https://miro.medium.com/max/1396/1*njwXqsShWvK81ANQCMBevw.jpeg' />
      <div>
        <div>User name</div>
        <Button onClick={() => console.log('SIGN OUT')} color='secondary' text='Sign out' />
      </div>
    </div>
  );
};
