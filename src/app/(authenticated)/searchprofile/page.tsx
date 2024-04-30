"use client"
import React, {useEffect, useState} from "react";
import {getAllUsers, getPersonalityType} from "@/lib/database";
import styled from 'styled-components';
import {StyledH1} from "@/Styles/GeneralStyles";
import Link from "next/link";

//Tim Component
const UserCard = styled.div`
    border: 3px solid #ddd;
    padding: 16px;
    margin: 10px 150px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    a {
        text-decoration: none;
    }

    &:hover {
        background-color: white;
        color: black;
    }
`;

const UserInfo = styled.p`
    margin: 4px 0;
    color: white;
    ${UserCard}:hover & {
        color: black;
    }
`;

// Search Profile
// users have the ability to see all other users and view their profile
function SearchProfile() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                // Fetch all users
                const users = await getAllUsers();
                // Map each user to fetch their personality type and compile data
                const data = await Promise.all(users.map(async (user) => {
                    // Fetch personality type by ID, defaulting to -1 if not provided
                    const personalityType = await getPersonalityType(user.personalityTypeId || -1);
                    // Get personality type name or default to an empty string
                    const personalityTypeName = personalityType ? personalityType.name : "";
                    return {
                        id: user.id,
                        name: user.name || "",
                        email: user.email || "",
                        biography: user.biography || "",
                        personalityType: personalityTypeName
                    };
                }));
                setUserData(data);
            } catch (error) {
                console.error("Error fetching users", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            {loading ? (
                <StyledH1>Loading...</StyledH1>
            ) : (
                <ul>
                    {userData.map(user => (
                        <UserCard key={user.id}>
                            <Link href={`/profile/${user.id}`} key={user.id}>

                                <UserInfo>Name: {user.name}</UserInfo>
                                <UserInfo>Email: {user.email}</UserInfo>
                                <UserInfo>Biography: {user.biography}</UserInfo>
                                <UserInfo>Personality Type: {user.personalityType}</UserInfo>
                            </Link>
                        </UserCard>

                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchProfile;
