import { QuestionTitle, Answer, WrongIcon, RightIcon, Flag } from "./Question.styles";
import { Fragment } from "react";
import Button from "../Button/Button.component";

function Question({results,question,setQuestionNumber}){
    console.log(question);
    return(
        <Fragment>
            {question?.flag && <Flag src={question.flag} alt="flag"/>}
            <QuestionTitle>{question?.text}</QuestionTitle>
            <Answer result={results[0]}><span>A</span>{question?.answers[0]}<WrongIcon/><RightIcon/></Answer>
            <Answer result={results[1]}><span>B</span>{question?.answers[1]}<WrongIcon/><RightIcon/></Answer>
            <Answer result={results[2]}><span>C</span>{question?.answers[2]}<WrongIcon/><RightIcon/></Answer>
            <Answer result={results[3]}><span>D</span>{question?.answers[3]}<WrongIcon/><RightIcon/></Answer>
            {results.includes("right") && <Button className="next">Next</Button>}
        </Fragment>
    );
}

export default Question;