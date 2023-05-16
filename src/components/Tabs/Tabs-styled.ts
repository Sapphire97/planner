import styled from "styled-components";

const TabsContainer = styled.ul`
    margin: 1rem 0 0 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    z-index: 7000;
    font-size: 1rem;
    flex-direction: row;
    box-shadow: none;
    z-index: auto;
`

const Tab = styled.li`
    display: flex;
    font-size: .875rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 1rem;
    box-sizing: border-box;
    list-style: none;
    padding: .75rem .5rem;
    text-decoration: none;
    text-transform: capitalize
`
export { TabsContainer, Tab }