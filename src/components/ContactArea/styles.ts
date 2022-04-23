import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;


    .descriptionContact {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;

        h2 {
            font-size: 2rem;
            color: var(--text-color);
            font-family: 'Baloo 2', Arial, Helvetica, cursive;
        }

        p {
            color: var(--text-color);
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            line-height: 1.5rem;
            font-size: 1.1rem;
        }
    }

    .formArea {
        margin: 1rem 3rem;
    }

    .formArea form label {
        display: flex;
        flex-direction: column;
    }

    .formArea form input {
        background-color: var(--text-color);
        width: 350px;
        height: 40px;
        padding: 0 0.5rem;
        border: none;
        font-size: 1rem;
        border-radius: 8px;
    }

    .formArea form label span, 
    .textArea span {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-weight: 300;
        color: var(--text-color);
        font-size: 1.1rem;
        margin: 2rem 0 0.5rem;
    }

    .textArea {
        display: flex;
        flex-direction: column;
        width: 350px;
    }

    .textArea textarea {
        background-color: var(--text-color);
        width: 350px;
        height: 140px;
        padding: 0.2rem 0.5rem;
        border: none;
        font-size: 1rem;
        border-radius: 8px;
    }

    .buttonStyle {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 2rem;
    }
`;
