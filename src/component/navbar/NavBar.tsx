"use client"
import styled from 'styled-components';
import LogOutButton from "@/component/navbar/LogOutButton";

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.11);
    height: 80px;
`;

const Title = styled.h2`
  text-align: center;
    margin: 4px;
    color: white;
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
                {/*todo: href for My Profile should be /profile/{userId} */}
                <NavLink href="/">
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

