import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: clamp(2.5rem, 10vw, 5rem);
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 10px;
right: 25px;
cursor: pointer;
color: #fff;

p{
    transform: translate(-175%, 100);
    font-weight: bold;
}
`

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;