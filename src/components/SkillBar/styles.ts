import styled from "styled-components";

import type { SkillProps } from "./skill"


export const Container = styled.div<SkillProps>`
    .bar {
        display: block;
        width: ${props => props.barProgress};
        height: 5px;
        margin: 5px -5px;
        -webkit-transition: all 0.3s ease-in-out;
        border-radius: 0.5rem;
        transition: all 0.3s ease-in-out;
        background: ${props => props.barColor};
    }

    
    p {
        color: var(--text-color);
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-size: 1.2rem;
        font-weight: 400;
        padding-bottom: 0.2rem;
    }

    .darkbar {
        background: var(--dark-violet);
        height: 5px;
        margin: 5px -5px;
        border-radius: 0.5rem;
    }
    
`;
