"use client"
import {getServerSession} from "next-auth";
import LogOutButton from "@/component/LogOutButton";
import Link from "next/link";
import NavBar from "@/component/navbar/NavigationBar";


export default async function Profile() {
    const session = await getServerSession();
    console.log("Session: ", session);
    if (!session) {
        return (
            <>
                <h1>Profile</h1>
                <p> UNAUTHORIZED </p>
                <Link href="/public">To Home</Link>
            </>
        )

    } else {
        const name = session?.user?.name || "no name";

        return (
            <div>
                <NavBar
                    title="Profile"
                    firstLink="/searchprofile"
                    searchName='Search'
                    secondLink="/"
                    secName="Log out"
                />
                <h1>Profile</h1>
                <p>Welcome {name}</p>
                <LogOutButton/>
            </div>
        )
    }
}
