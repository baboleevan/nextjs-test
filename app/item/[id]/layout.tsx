import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import Story, { StoryProps } from '@/components/Story';
import CommentForm from '@/components/CommentForm';

import getItem from '@/lib/get-item';
import fetchData from '@/lib/fetch-data';

import styles from './layout.module.css';

export const dynamicParams = true;

export async function generateStaticParams() {
  const storyIds: any[] = await fetchData('topstories');
  return storyIds.slice(0, 10).map(id => {
    return {
      id: String(id)
    };
  });
}

interface Props {
  params: {
    id: string;
  };
  children: ReactNode;
}

export default async function ItemPage({ params, children }: Props) {
  const { id } = params;
  if (!id) {
    notFound();
  }
  const story: StoryProps | null = await getItem(id);
  if (!story) {
    notFound();
  }

  return (
    <div className={styles.item}>
      <Story {...story} />
      <div className={styles.form}>
        <CommentForm />
      </div>
      {children}
    </div>
  );
}
