import Link from 'next/link';

import fetchData from '@/lib/fetch-data';
import { transform } from '@/lib/get-item';

import Story, { StoryProps } from '@/components/Story';
import styles from '@/components/Stories.module.css';

interface Props {
  id: string;
}

interface StoriesProps {
  storyIds: string[];
  page?: number;
}

async function StoryWithData({ id }: Props) {
  const data = await fetchData(`item/${id}`);
  const story: StoryProps | null = transform(data);
  if (!story) {
    return null;
  }
  return <Story {...story} />;
}

export default async function Stories({ storyIds, page = 1 }: StoriesProps) {
  const limit = 10;
  const offset = (page - 1) * limit;

  return (
    <div>
      {storyIds.slice(offset, offset + limit).map((id, i) => {
        return (
          <div key={JSON.stringify([id, i])} className={styles.item}>
            {null != offset ? <span className={styles.count}>{i + offset + 1}</span> : null}
            <StoryWithData id={id} key={id} />
          </div>
        );
      })}
      <div className={styles.footer}>
        <Link href={`/news/${+page + 1}`}>More</Link>
      </div>
    </div>
  );
}
