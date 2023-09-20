import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link href="/top-progress-bar">top progress bar</Link>
      <Link href="/gradient-animation">gradient animation</Link>
      <Link href="/curve-sections">curve sections</Link>
      <Link href="/charts">charts</Link>
      <Link href="/draggables">draggables</Link>
    </main>
  );
}
