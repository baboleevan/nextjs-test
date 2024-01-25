import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
}
export default function ErrorPlaceholder({ error }: Props) {
  useEffect(() => {
    // todo Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <span>{`Application error: a server-side exception has occurred`}</span>;
}
