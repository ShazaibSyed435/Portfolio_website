import styles from './atmosphere.module.css';

export default function AuroraGradients() {
  return (
    <div className={`${styles.auroraLayer} absolute inset-0`}>
      <div className={`${styles.aurora} ${styles.blue}`} />
      <div className={`${styles.aurora} ${styles.violet}`} />
      <div className={`${styles.aurora} ${styles.cyan}`} />
    </div>
  );
}
