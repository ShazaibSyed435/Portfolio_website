import styles from './atmosphere.module.css';

export default function FloatingObjects() {
  return (
    <div className={`${styles.objectLayer} absolute inset-0`}>
      <div className={`${styles.glassSphere} ${styles.sphereNear}`} />
      <div className={`${styles.glassSphere} ${styles.sphereFar}`} />
      <div className={styles.cubeFloat}>
        <div className={styles.cube}>
          {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face) => (
            <span key={face} className={`${styles.cubeFace} ${styles[face]}`} />
          ))}
        </div>
      </div>
      <div className={styles.orbitFloat}>
        <div className={styles.orbit} />
      </div>
    </div>
  );
}
