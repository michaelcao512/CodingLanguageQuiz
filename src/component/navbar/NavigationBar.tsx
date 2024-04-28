import styled from 'styled-components';
import PropTypes from "prop-types";

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #5B4EF0, #67B6FF);
    height: 80px;
`;

const Title = styled.h2`
  text-align: center;
    margin: 4px;
`;

const NavLink = styled.a`
    color: black;
    text-decoration: none;
    padding: 20px;
`;

export default function NavBar({title, searchName, firstLink, secName, secondLink}) {
    return (
        <NavBarWrapper>
            <Title>{title}</Title>
            <div>
                <NavLink href="#" onClick={firstLink}>
                    {searchName}
                </NavLink>
                <NavLink href={secondLink}>
                    {secName}
                </NavLink>
            </div>
        </NavBarWrapper>
    );
}


NavBar.propTypes={
    title: PropTypes.string,
    searchName: PropTypes.string,
    secName: PropTypes.string,
    firstLink: PropTypes.string.isRequired,
    secondLink: PropTypes.string.isRequired
}