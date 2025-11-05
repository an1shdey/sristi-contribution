import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Home Page</div>  
      <br />
      <Link href="/organizing_team">Teams Page</Link>
    </main>
  );
}
