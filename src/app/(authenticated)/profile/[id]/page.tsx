"use client";

import { getPersonalityType, getUser } from "@/lib/database";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { StyledContainer, StyledP, StyledH1, StyledInput, ProfileContainer, ProfileName } from "@/Styles/GeneralStyles";
import { PersonalityType } from "@prisma/client";


/**
 * Functional component to display user profile information.
 */
export default function UserProfile() {
  const params = useParams<{ id: string }>(); // parse URL to grab user ID

  const [loading, setLoading] = useState(true);

  // holding userInfo as state to display later
  const [userInfo, setUserInfo] = useState<{
    id: number;
    name: string;
    email: string;
    biography: string;
    personalityTypeName: string;
    personalityTypeDescription: string;
  }>();

  /**
   * Matt's Component
   * Grab user data with the parsed userID by calling the getUser() helper function
   * @returns all user data
   */
  useEffect(() => {
    async function getUserInfo() {
      try {
        const user = await getUser(parseInt(params.id));
        console.log("USER", user);
        const personalityType: PersonalityType = await getPersonalityType(
          user.personalityTypeId || -1
        );
        const personalityTypeName = personalityType ? personalityType.name : "";
        const personalityTypeDescription = personalityType ? personalityType.description : "";

        const data = {
          id: user.id,
          name: user.name || "",
          email: user.email || "",
          biography: user.biography || "",
          personalityTypeName: personalityTypeName,
          personalityTypeDescription: personalityTypeDescription

        };

        // setting user state and stopping loading phase
        setUserInfo(data);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching users", error);
      }
    }
    getUserInfo();
  }, [params.id]);

  return (
    <ProfileContainer>
      {loading ? (<StyledH1>LOADING...</StyledH1>) : (
        <>
          <StyledH1>{userInfo?.name}</StyledH1>
          <StyledP>{userInfo?.biography}</StyledP>
          <StyledP>{userInfo?.email}</StyledP>

          <StyledContainer>
            <ProfileName>{userInfo?.personalityTypeName}</ProfileName>
            <StyledP>{userInfo?.personalityTypeDescription}</StyledP>
          </StyledContainer>


        </>
      )}
    </ProfileContainer>
  );
}
