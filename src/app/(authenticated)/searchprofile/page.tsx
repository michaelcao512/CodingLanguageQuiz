"use client";
import React, {useEffect, useState} from "react";
import {getAllUsers, getPersonalityType} from "@/lib/database";
import styled from 'styled-components';

const UserCard = styled.div`
  border: 3px solid #ddd;
  padding: 16px;
  margin: 10px 150px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.p`
  margin: 4px 0;
    color: white;
`;

function SearchProfile() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserData[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await getAllUsers();
                const userData = await Promise.all(users.map(async (user) => {
                    const personalityType = await getPersonalityType(user.personalityTypeId || -1);
                    const personalityTypeName = personalityType.name;
                    return {
                        id: user.id,
                        name: user.name || "",
                        email: user.email || "",
                        biography: user.biography || "",
                        personalityType: personalityTypeName || ""
                    };
                }));
                setUserData(userData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchUsers().then();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {userData.map(user => (
                        <UserCard key={user.id}>
                            <UserInfo>Name: {user.name}</UserInfo>
                            <UserInfo>Email: {user.email}</UserInfo>
                            <UserInfo>Biography: {user.biography}</UserInfo>
                            <UserInfo>Personality Type: {user.personalityType}</UserInfo>

                        </UserCard>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchProfile;