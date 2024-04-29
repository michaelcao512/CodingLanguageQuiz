import {getServerSession} from "next-auth";
import Link from "next/link";

export default async function Profile() {
    const session = await getServerSession();

    console.log("Session: ", session);
    if (!session) {
        return (
            <>
                <h1>Profile</h1>
                <p> UNAUTHORIZED </p>
                <Link href="/">To Home</Link>
            </>
        )
    }  else {

    }
}

