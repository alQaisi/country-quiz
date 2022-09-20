import { ButtonCont } from "./Button.styles";

function Button({children,...buttonProps}){
    return(
        <ButtonCont {...buttonProps}> { children } </ButtonCont>
    );
}
export default Button;
