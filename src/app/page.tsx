import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-5xl uppercase p-24 space-y-2">
      <Link href="/top-progress-bar">top progress bar</Link>
      <Link href="/gradient-animation">gradient animation</Link>
      <Link href="/curve-sections">curve sections</Link>
      <Link href="/charts">charts</Link>
      <Link href="/draggables">draggables</Link>
      <Link href="/slider">slider</Link>
      <Link href="/localization">localization</Link>
      <Link href="/swiper">swiper</Link>
      <Link href="/scroll">scroll</Link>
    </main>
  );
}
