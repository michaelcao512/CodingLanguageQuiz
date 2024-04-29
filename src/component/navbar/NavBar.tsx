"use client"
import styled from 'styled-components';
import LogOutButton from "@/component/navbar/LogOutButton";

//Anh's component

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.11);
    height: 80px;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    padding: 20px;
`;

export default function NavBar( ) {
    return (
        <NavBarWrapper>
            <div>
                {/*to direct the user to profile page/ search profile /log out*/}
                <NavLink href="/profile">
                    My Profile
                </NavLink>
                <NavLink href={"/searchprofile"}>
                    Search Profile
                </NavLink>
                <LogOutButton/>
            </div>
        </NavBarWrapper>
    );
}

