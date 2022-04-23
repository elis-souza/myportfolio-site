import { Container } from './styles'

import type { ButtonProps } from './button'
  
export function Button({buttonText, buttonColor, buttonTextColor, buttonSize = 'medium', buttonHover} : ButtonProps) {
    return (
        <Container 
            buttonColor={buttonColor} 
            buttonTextColor={buttonTextColor} 
            buttonSize={buttonSize}
            buttonHover={buttonHover}
        >

            <button>{buttonText}</button>
        </Container>
    );
}