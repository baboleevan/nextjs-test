'use client';

import ErrorPlaceholder from '@/components/ErrorPlaceholder';

interface Props {
  error: Error & { digest?: string };
}
export default function Error({ error }: Props) {
  return <ErrorPlaceholder error={error} />;
}
