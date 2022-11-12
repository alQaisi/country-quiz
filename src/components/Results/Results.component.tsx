import WinnerIcon from "../WinnerIcon/WinnerIcon.component";
import Button from "../Button/Button.component";
import { Fragment } from "react";
import { Title, Result } from "./Results.styles";

function Results({questionNumber,Reset}:{questionNumber:number,Reset:()=>void}){
    return(
        <Fragment>
            <WinnerIcon/>
            <Title>Results</Title>
            <Result>You got <span>{questionNumber}</span> correct answers</Result>
            <Button className="center" onClick={Reset}>Try again</Button>
        </Fragment>
    );
}
export default Results;