import Link from 'next/link';
import { headers } from 'next/headers';

export default function NotFound() {
  const headersList = headers();
  // const domain = headersList.get('host');
  // console.log('headersList', headersList);
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        go <Link href="/">Home</Link>
      </p>
    </div>
  );
  // return (
  //   <div>
  //     <h1>404 Not Found</h1>
  //     <p>This page could not be found.</p>
  //   </div>
  // );
}
