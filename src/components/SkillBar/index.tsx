import { Container } from "./styles";

import type { SkillProps } from "./skill"


export function SkillBar({title, barColor, barProgress} : SkillProps) {
    return (
        <Container barColor={barColor} barProgress={barProgress} >
            <p>{title}</p>
            <div className="darkbar">
                <div className="bar"></div>
            </div>
        </Container>
    )
}