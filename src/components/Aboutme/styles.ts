import styled from "styled-components";

export const Container = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

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