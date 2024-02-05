import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/Ali" >Ali</Link>
                </li>
                <li>
                    <Link href="/studentlist/Muazam" >Muazam</Link>
                </li>
                <li>
                    <Link href="/studentlist/Mukaram" >Mukaram</Link>
                </li>
            </ul>
        </div>
    )
}