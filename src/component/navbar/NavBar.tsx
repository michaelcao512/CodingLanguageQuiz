import styled from 'styled-components';
import PropTypes from "prop-types";

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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