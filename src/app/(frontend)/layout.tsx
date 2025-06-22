import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  );
}
