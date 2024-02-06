import Image from "next/image";
import Link from "next/link";
import name from "./name/page";

export default function Home() {
  return (
    <>
    <section>
    <div>Hello World</div>
    <Link href='/name'>Check name and address</Link>    {/* Normal route */}
    {/* <==========================Dynamic route=====================>
    Example 1: Just write something after http://localhost:3000/
    Example 2:  */}
    <Link href="/studentlist" >Go to studentlist Page</Link>
    {/* <==========================Generating Static Params=====================> */}
    <div>
      <h1>SSG in Next js</h1>
      <Link href={"/users"}>Go to users page</Link>
    </div>
    </section>
    </>
  );
}
