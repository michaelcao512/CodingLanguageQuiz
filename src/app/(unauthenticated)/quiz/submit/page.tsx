"use client"
import { useRouter} from "next/navigation";
import {ToLoginButton, ToRegisterButton} from "@/component/buttons/buttons";

export default function Submit(){
    const router = useRouter();
    return (
        <>
            <div>
                <p>To view your results, please create a new account</p>
                <ToRegisterButton />
            </div>
        </>
    )
}