import { QuestionTitle, Flag, Loading } from "./Question.styles";
import Button from "../Button/Button.component";
import { motion, AnimatePresence } from "framer-motion";
import { Children } from "react";
import Answer from "../answer/answer.component";

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25
      }
    },
    exit:{ opacity:0 }
}

const flag={
    hidden:{y:-100,opacity:0},
    show:{y:0,opacity:1}
}

function Question({results,questionNumber,question,Next,onAnsClick}){
    if(question===undefined)
        return <Loading/>
    return(
        <AnimatePresence mode="wait" initial={true}>
            <motion.div variants={container} initial="hidden" animate="show" exit="exit" key={questionNumber || -1}>
                {question?.flag && <motion.div variants={flag}><Flag src={question.flag} alt="flag"/></motion.div>}
                <QuestionTitle>{question.text}</QuestionTitle>
                { Children.toArray(question?.answers.map((answerData,index)=><Answer onAnsClick={onAnsClick} answer={answerData} result={results[index]} index={index} />)) }
                {results.includes("right") && <Button className="next" onClick={Next}>Next</Button>}
            </motion.div>
        </AnimatePresence>
    );
}

export default Question;