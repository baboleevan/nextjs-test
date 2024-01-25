interface Props {
  error: Error & { digest?: string };
}

export default function CustomErrorPage({ error }: Props) {
  return <div>404</div>;
}
