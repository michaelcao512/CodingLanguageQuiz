"use client"
import {getUserIdByEmail} from "@/lib/database";
import {useEffect} from "react";
import {getSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {StyledH1} from "@/Styles/GeneralStyles";

/**
 * Loading all user data when fetching
 * @returns Loading Text
 */
export default function Profile() {
    const router = useRouter();
    useEffect(() => {
        async function fetchProfile() {
            const session = await getSession();
            if (!session) {
                return;
            }

            const email = session?.user?.email || "no email";
            const userId = await getUserIdByEmail(email);

            router.push(`/profile/${userId}`);
        }
        fetchProfile().then();
    }, [router]);

    return (
        <>
            <StyledH1> LOADING... </StyledH1>
        </>
    )
}


