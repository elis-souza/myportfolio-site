import { SkillBar } from "../SkillBar";
import { SkillsDescription } from "../SkillsDescription";
import { Container, Content } from "./styles";

export function MySkills() {
    return (
        
        <Container>
            <Content>

                <div className="containerInfo">

                
                <SkillsDescription />

                <div className="skillBox">
                    <SkillBar  title='HTML' barColor='var(--green)' barProgress='100%' />

                    <SkillBar  title='CSS' barColor='var(--violet)' barProgress='90%' />

                    <SkillBar  title='JavaScript' barColor='var(--green)' barProgress='40%' />

                    <SkillBar  title='React' barColor='var(--violet)' barProgress='40%' />

                    <SkillBar  title='Figma' barColor='var(--green)' barProgress='90%' />
                </div>

                </div>
                
            </Content>
        </Container>
        
    );
}