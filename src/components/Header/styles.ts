import styled from "styled-components";

export const Container = styled.header`
    background: var(--dark-violet);
`;

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    padding: 0.8rem 1rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    nav ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    nav ul li {
        list-style: none;
    }

    nav ul li a {
        color: var(--text-color);
        text-decoration: none;

        transition: 0.2s;

        &:hover{
            color: var(--green);
        }
    }

    
`;