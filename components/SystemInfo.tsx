import styles from './SystemInfo.module.css';

export default function SystemInfo() {
  return (
    <div className={styles['system-info']}>
      Rendered at {new Date().toTimeString()} with Vercel.
    </div>
  );
}
