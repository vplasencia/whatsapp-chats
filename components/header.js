import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between items-center p-3 md:p-5 mb-5 md:mb-5">
      <Link href="/">
        <a className="text-2xl font-bold text-cyan-500">WhatsApp Chats</a>
      </Link>
      <Link href="/about">
        <a className="text-cyan-400 font-semibold px-5 py-3 rounded-lg hover:bg-slate-800 transition-all duration-150 ease-linear">About</a>
      </Link>
    </header>
  );
}
