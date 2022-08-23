import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ChatForm from "../components/chatForm";

export default function Home() {
  return (
    <div>
      <ChatForm />
    </div>
  );
}
