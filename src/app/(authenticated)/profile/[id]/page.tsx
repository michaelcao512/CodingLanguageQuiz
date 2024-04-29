"use client";

import { getServerSession } from "next-auth";
import Link from "next/link";

import { getUserIdByEmail, getPersonalityType, getUser } from "@/lib/database";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const params = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<UserData>();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const user = await getUser(parseInt(params.id));

        const personalityType = await getPersonalityType(
          user.personalityTypeId || -1
        );
        const personalityTypeName = personalityType ? personalityType.name : "";
        const data = {
          id: user.id,
          name: user.name || "",
          email: user.email || "",
          biography: user.biography || "",
          personalityType: personalityTypeName,
        };
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    }
    getUserInfo();
  }, [params.id]);

  return (
    <>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.biography}</p>
      <p>{userInfo?.email}</p>
      <p>{userInfo?.personalityType}</p>
    </>
  );
}
