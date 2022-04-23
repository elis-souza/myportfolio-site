import styled from 'styled-components';

export const Container = styled.div`
    /* margin-top: 5rem; */
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-right: 6rem;


    h2 {
        color: var(--violet);
        text-transform: uppercase;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-size: 2rem;
        letter-spacing: 0.3rem;
    }

    p {
        color: var(--text-color);
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5rem;
        font-size: 1.1rem;
    }

`;