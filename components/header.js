import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-5 mb-5 md:mb-10">
      <Link href="/">
        <a className="text-2xl font-bold text-cyan-500">WhatsApp Chats</a>
      </Link>
      <Link href="/about">
        <a className="text-cyan-400 hover:underline">About</a>
      </Link>
    </header>
  );
}
