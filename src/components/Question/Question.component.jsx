import { QuestionTitle, Answer, WrongIcon, RightIcon, Flag, Loading } from "./Question.styles";
import { Fragment } from "react";
import Button from "../Button/Button.component";

function Question({results,question,Next,onAnsClick}){
    

    if(question===undefined)
        return <Loading/>
    return(
        <Fragment>
            {question?.flag && <Flag src={question.flag} alt="flag"/>}
            <QuestionTitle>{question.text}</QuestionTitle>
            <Answer onClick={onAnsClick} data-ans={question.answers[0]} result={results[0]}><span>A</span>{question.answers[0]}<WrongIcon/><RightIcon/></Answer>
            <Answer onClick={onAnsClick} data-ans={question.answers[1]} result={results[1]}><span>B</span>{question.answers[1]}<WrongIcon/><RightIcon/></Answer>
            <Answer onClick={onAnsClick} data-ans={question.answers[2]} result={results[2]}><span>C</span>{question.answers[2]}<WrongIcon/><RightIcon/></Answer>
            <Answer onClick={onAnsClick} data-ans={question.answers[3]} result={results[3]}><span>D</span>{question.answers[3]}<WrongIcon/><RightIcon/></Answer>
            {results.includes("right") && <Button className="next" onClick={Next}>Next</Button>}
        </Fragment>
    );
}

export default Question;