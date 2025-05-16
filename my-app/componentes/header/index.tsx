import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-2 py-4 bg-violet-400 text-white">
      <div className="flex items-center justify-between w-full">
        <div>Menu site</div>

        <nav aria-label="Menu principal">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/produtos" className="hover:underline">
                Produto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
