import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [logging, setLogging] = useState(false);

  useEffect(() => {
    // Perform any effect or cleanup here
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        로고
      </div>
      {!logging && (
        <div className={styles.button_container}>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      )}
    </header>
  );
};

export default Header;
