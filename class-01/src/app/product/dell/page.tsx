import Link from "next/link"
export default function page() {
    return (
      <div><h1>Dell laptop</h1>
        <Link href = "./hp">Hp</Link>
        <Link href = "./macbook">Macbook</Link>
        <Link href = "./">Home</Link>
      </div>
    )
  }