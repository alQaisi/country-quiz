import { QuizContainer } from "./Container.styles";
import QuizIcon from "../QuizIcon/QuizIcon.component";
import Question from "../Question/Question.component";
import Results from "../Results/Results.component";
import { Fragment, useContext } from "react";
import { QuizContext } from "../../context/quizContext";

function Container(){
    const { questionNumber, setQuestionNumber, question, results }=useContext(QuizContext);
    let Content;
    if(questionNumber===null)
        Content=<Results setQuestionNumber={setQuestionNumber}/>;
    else
        Content=<Fragment><QuizIcon/><Question results={results} setQuestionNumber={setQuestionNumber} question={question}/></Fragment>
    return(
        <QuizContainer>
            {Content}
        </QuizContainer>
    );
}
export default Container;