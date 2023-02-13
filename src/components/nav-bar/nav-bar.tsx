import { ReactNode } from 'react';
import './styles.scss';
type navBar = {
  links: ReactNode[];
};

export const NavBar = ({ links }: navBar) => {
  return (
    <div className='nav-bar-main'>
      {links.map(
        (link): ReactNode => (
          <div key={crypto.randomUUID()}>{link} </div>
        )
      )}
    </div>
  );
};
