"use client"
import {createPersonalityType, deleteUser} from "@/lib/database";
import React, {Dispatch, SetStateAction} from 'react';

export function DeleteUserButton(params: {id: number}){

    async function handleClick(event: React.MouseEvent){
        event.preventDefault();
        await deleteUser(params?.id);
    }
    return(
        <>

            <button onClick={handleClick}>Delete User</button>

        </>
    )
}
