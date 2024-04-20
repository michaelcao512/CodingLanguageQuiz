import Link from "next/link";

export default function Home() {
  return (
      <>
          <h1> LANDING PAGE </h1>

          <Link href="/login">To Login </Link>
          <Link href={"/quizlanding"}>To Quiz Landing</Link>
      </>
  );
}
