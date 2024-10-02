import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1>Test Program</h1>
    <br />
    <Link href="/post">Page</Link>
    <br />
    <Link href="/albums">Albums</Link>
    </>
  );
}
