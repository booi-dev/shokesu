import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-5xl uppercase p-24 space-y-2">
      <Link
        href="/top-progress-bar"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        top progress bar
      </Link>
      <Link
        href="/gradient-animation"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        gradient animation
      </Link>
      <Link
        href="/curve-sections"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        curve sections
      </Link>
      <Link
        href="/charts"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        charts
      </Link>
      <Link
        href="/comparer"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        image comparer
      </Link>
      <Link
        href="/slider"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        slider
      </Link>
      <Link
        href="/localization"
        className="hover:bg-white w-max hover:text-black transition-all duration-150"
      >
        localization
      </Link>
    </main>
  );
}
