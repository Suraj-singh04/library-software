import Link from "next/link";

export default function Home() {
  return (
      <div>
          <main>
              <Link href="/login">
                  <button> Go to login page</button>
              </Link>
          </main>
      </div>
  );
}
