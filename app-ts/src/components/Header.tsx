import React from 'react';
import igniteLogo from '../assets/images/ignite-logo.svg';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
    </header>
  );
}
