import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/BrunoYTanaka.png" alt="Bruno Y. Tanaka" />
      <div>
        <strong>Bruno</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />

          level 1
          </p>
      </div>
    </div>
  )
}

export default Profile
