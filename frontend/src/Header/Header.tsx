import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [logging, setLogging] = useState(false);

  useEffect(() => {
    // Perform any effect or cleanup here
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to="/">
          <img src="/logo192.png" alt="Logo" />
        </Link>
      </div>
      {logging ? '로그인 중' : 
        <div className={styles.button_container}>
          <Link to="/login" className={styles.link_button}>
            로그인
          </Link>
          <Link to="/signup" className={styles.link_button}>
            회원가입
          </Link>
        </div>
      }
    </header>
  );
};

export default Header;
