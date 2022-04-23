import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Elis" />

                <nav>
                    <ul>
                        <li><a href="#me">Me</a></li>
                        <li><a href="#myskills">My Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}