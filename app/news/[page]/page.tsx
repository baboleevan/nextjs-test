import Stories from '@/components/Stories';
import fetchData from '@/lib/fetch-data';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [1];
}

interface Props {
  params: {
    page: string;
  };
}

export default async function Page({ params }: Props) {
  const { page } = params;
  const storyIds = await fetchData('topstories');
  return <Stories page={+page} storyIds={storyIds} />;
}
