import styled from 'styled-components';

import type { ButtonProps } from './button'

export const Container = styled.div<ButtonProps>`
    button {
        background: ${props => props.buttonColor};
        color: ${props => props.buttonTextColor};

        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 2rem 0;
        padding: 0rem 3rem;
        height: ${
                props => 
                  props.buttonSize === 'small' ? '1rem' 
                : props.buttonSize === 'medium' ? '3rem'
                : '5rem'
                };

        border-radius: 0.5rem;
        box-shadow: 4px 3px 3px rgb(0 0 0 / 50%);
        border: none;

        &:hover {
            color: ${props => props.buttonHover};
            transform: translateY(0.1rem);
        }
    }
`;