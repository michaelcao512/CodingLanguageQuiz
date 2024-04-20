import LoginForm from "@/app/component/login/LoginForm";
import Link from "next/link";

export default function Login(){
    return (
        <>
            <h1> LOGIN PAGE </h1>
            <LoginForm/>
            <Link href={"/"}>To Home</Link>
        </>
    );
}