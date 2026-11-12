import styles from './atmosphere.module.css';

export default function PerspectiveGrid() {
  return (
    <div className={`${styles.gridLayer} absolute inset-0`}>
      <div className={styles.gridPlane} />
    </div>
  );
}
