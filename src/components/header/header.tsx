import React from 'react';
import styles from './styles.module.scss';
type header = {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
};

export const Header = ({ leftSection, rightSection }: header) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftSection}>{leftSection}</div>
      <div className={styles.rightSection}>{rightSection}</div>
    </div>
  );
};
