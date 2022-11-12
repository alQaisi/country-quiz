import { ButtonCont,ButtonProps } from "./Button.styles";

function Button({children,onClick,className}:ButtonProps){
    return(
        <ButtonCont className={className} onClick={onClick}>{children}</ButtonCont>
    );
}
export default Button;
