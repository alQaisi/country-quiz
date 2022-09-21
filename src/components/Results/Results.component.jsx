import WinnerIcon from "../WinnerIcon/WinnerIcon.component";
import Button from "../Button/Button.component";
import { Fragment } from "react";
import { Title, Result } from "./Results.styles";

function Results({questionNumber,Reset}){
    return(
        <Fragment>
            <WinnerIcon/>
            <Title>Results</Title>
            <Result>Tou got <span>{questionNumber}</span> correct answers</Result>
            <Button className="center" onClick={Reset}>Try again</Button>
        </Fragment>
    );
}
export default Results;