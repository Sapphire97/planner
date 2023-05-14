import styled from "styled-components";

const NavbarContainer = styled.nav`
    font-family: 'Open Sans', sans-serif !important;
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #007DBC;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1030;
    padding: 20px 50px;
    height: 20px;
`
const NavbarTitle = styled.span`
    color: #fff;
`

export { NavbarContainer, NavbarTitle }