import { ReactNode } from 'react';
import styles from './styles.module.scss';
type navBar = {
  links: ReactNode[];
};

export const NavBar = ({ links }: navBar) => {
  return (
    <div className={styles.mainWrapper}>
      {links.map(
        (link): ReactNode => (
          <div key={crypto.randomUUID()}>{link} </div>
        )
      )}
    </div>
  );
};
