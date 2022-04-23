import styled from "styled-components";

export const Container = styled.main`
    background: var(--dark-violet);
 
    div .skillBox {
        background: var(--background);
        max-width: 750px;
        width: 100%;
        padding: 2rem;

        border-radius: 0.5rem;
        box-shadow: 4px 3px 3px rgb(0 0 0 / 50%);
    }

`;

export const Content = styled.div`
    .containerInfo {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2.5rem 1rem;
        display: flex;
        justify-content: space-around; 
    }
    
`;

