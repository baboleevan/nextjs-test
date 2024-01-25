import Comment from '@/components/Comment';
import getItem from '@/lib/get-item';
import getComments from '@/lib/get-comments';

import styles from './page.module.css';

export const dynamicParams = true;

interface Props {
  params: {
    id: string;
  };
}

export default async function Comments({ params }: Props) {
  const { id } = params;
  const story = await getItem(id);
  const comments = await getComments(story?.comments);
  return (
    <div className={styles.comments}>
      {(comments || []).map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
