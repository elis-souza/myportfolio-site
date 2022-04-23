import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    h3 {
        font-size: 1.5rem;
        color: var(--text-color);
        text-transform: uppercase;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
    }

    h1 {
        font-size: 4.5rem;
        line-height: 4rem;
        color: var(--green);
        text-transform: uppercase;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
    }

    .avaImg img {
        height: 304px;
        width: 304px;
    }

    @media (max-width: 768px) {
        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
    
`;