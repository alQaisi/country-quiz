import { QuizContainer, ErrorCont } from "./Container.styles";
import QuizIcon from "../QuizIcon/QuizIcon.component";
import Question from "../Question/Question.component";
import Results from "../Results/Results.component";
import { Fragment, useContext } from "react";
import { QuizContext } from "../../context/quizContext";
import { CountriesContext } from "../../context/countriesContext";
import Button from "../Button/Button.component"

function Container(){
    const { isError }=useContext(CountriesContext);
    const { Reset, questionNumber, question, results, onAnsClick, Next }=useContext(QuizContext);
    let Content;
    if(isError)
        return <ErrorCont>
                    <h2>Check your internet connection and try again</h2>
                    <Button className="reload" onClick={()=>window.location.reload(false)}>Reload</Button>
                </ErrorCont>
    if(question===null)
        Content=<Results questionNumber={questionNumber} Reset={Reset}/>;
    else
        Content=<Fragment><QuizIcon/><Question Next={Next} onAnsClick={onAnsClick} results={results} question={question}/></Fragment>
    return(
        <QuizContainer>
            {Content}
        </QuizContainer>
    );
}
export default Container;