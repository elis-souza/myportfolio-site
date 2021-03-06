import { Container } from "./styles";
import imgLogoFooter from "../../assets/logo_symbol.png"
import imgGithub from "../../assets/github.png"
import imgLinkedin from "../../assets/linkedin.png"
import imgInsta from "../../assets/instagram.png"
import imgTwitter from "../../assets/twitter.png"

export function Footer() {
    return (
        <Container>
            <div className="containerIcons">
                <div className="logoFooter">
                    <img src={imgLogoFooter} alt="Symbol Elis Souza" />
                </div>

                <div className="socialMedia">
                    <a href="" target="_blank">
                        <img src={imgGithub} alt="Github" />
                    </a>

                    <a href="" target="_blank">
                        <img src={imgLinkedin} alt="Linkedin" />
                    </a>

                    <a href="" target="_blank">
                        <img src={imgInsta} alt="Instagram" />
                    </a>

                    <a href="" target="_blank">
                        <img src={imgTwitter} alt="Twitter" />
                    </a>
                </div>
            </div>

            <div className="copyrightText">
                ©2022 Autodata Dev
            </div>
        </Container>
    )
}