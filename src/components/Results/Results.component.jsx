import WinnerIcon from "../WinnerIcon/WinnerIcon.component";
import Button from "../Button/Button.component";
import { Fragment } from "react";
import { Title, Result } from "./Results.styles";

function Results(){
    return(
        <Fragment>
            <WinnerIcon/>
            <Title>Results</Title>
            <Result>Tou got <span>4</span> correct answers</Result>
            <Button className="center">Try again</Button>
        </Fragment>
    );
}
export default Results;