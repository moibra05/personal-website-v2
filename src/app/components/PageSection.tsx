type Props = {
  children: React.ReactNode;
};

export default function PageSection({ children }: Props) {
  return <section className="min-h-screen">{children}</section>;
}
