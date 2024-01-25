import styles from './CommentForm.module.css';

export default function CommentForm() {
  return (
    <div>
      <textarea className={styles.textarea} />
      <button className={styles.button}>add comment</button>
    </div>
  );
}
