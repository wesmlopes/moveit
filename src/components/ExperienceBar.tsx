import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>@xp</span>
      <div>
        <div style={{ width: '50%' }}/>

        <span className={styles.currentExperience} style={{ left:'50%' }}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}