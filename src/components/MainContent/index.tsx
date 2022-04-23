import avatarImg from '../../assets/avatar.png'
import { Button } from '../Button';
import { Container } from "./styles";

export function MainContent() {
    return (
        <Container>
            <div>
                <h3>About Elis Souza</h3>
                <h1>Front End<br></br> Developer</h1>

                <Button 
                    buttonText={'HIRE ME'} 
                    buttonColor={'var(--violet)'} 
                    buttonTextColor={'white'}
                    buttonSize={'medium'}
                    buttonHover={''}
                />

            </div>

            <div className='avaImg'>
                <img src={avatarImg} alt="Imagem de Elis Souza" />
            </div>
            
        </Container>
    )
}