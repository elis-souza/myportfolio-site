import { Button } from "../Button";
import { Container } from "./styles";

export function ContactArea() {
    return (
        <Container>
            <div className="descriptionContact">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formArea">
                <form action="">
                    <label htmlFor="name">
                        <span>Name:</span>
                        <input type="text" id="name" name="name" />
                    </label>

                    <label htmlFor="name">
                        <span>E-mail:</span>
                        <input type="email" id="name" name="name" />
                    </label>
                </form>
            </div>

            <div className="textArea">
                <span>Message:</span>
                <textarea name="message" id="" cols={50} rows={8} form="usrform"></textarea>
            </div>

            <div className="buttonStyle">
                <Button 
                        buttonText={'SEND'} 
                        buttonColor={'var(--violet)'} 
                        buttonTextColor={'white'}
                        buttonSize={'medium'}
                        buttonHover={''}
                />
            </div>
        </Container>
    )
}