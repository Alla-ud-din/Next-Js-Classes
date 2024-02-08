"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Login() {
    const router = useRouter();
    // console.log(router);  
    const navigate = (page: string) => {
        router.push("/login/" + page)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <br /> <br />
            <button onClick={() => navigate("loginstudent")} >Go to Student Login Page</button>
            <br /> <br />
            <button onClick={() => navigate("loginteacher")} >Go to Teacher Login Page</button>

        </div>
    )
}
