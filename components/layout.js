import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import "@fontsource/open-sans";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>WhatsApp Chats</title>
        <meta name="title" content="WhatsApp Chats" />
        <meta name="description" content="WhatsApp Chats" />
        <meta name="theme-color" content="#ea580c" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whatsappchats.vercel.app/" />
        <meta property="twitter:title" content="WhatsApp Chats" />
        <meta
          property="twitter:description"
          content="WhatsApp Chats"
        />
        <meta property="twitter:image" content="/socialMedia.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://whatsappchats.vercel.app/"
          key="ogurl"
        />
        <meta property="og:image" content="/socialMedia.png" key="ogimage" />
        <meta property="og:title" content="WhatsApp Chats" key="ogtitle" />
        <meta
          property="og:description"
          content="WhatsApp Chats"
          key="ogdesc"
        />
      </Head>
      <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
