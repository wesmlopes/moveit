import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/wesmlopes.png" alt="Wesley de Moraes Lopes"/>
      <div>
        <strong>Wesley de Moraes Lopes</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
          </p>
      </div>
    </div>
  );
}