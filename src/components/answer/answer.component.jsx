import { motion } from "framer-motion";
import { Answer as AnswerContainer, WrongIcon, RightIcon } from "./answer.styles";

const answerAnimations = {
    hidden: { x:-100,opacity: .0 },
    show: { x:0,opacity: 1 },
}

const chars=["A","B","C","D"];

function Answer({onAnsClick,answer,result,index}) {
    return (
        <motion.div variants={answerAnimations}>
            <AnswerContainer data-ans={answer} onClick={onAnsClick} result={result}>
                <span>{ chars[index] }</span>
                { answer }
                <WrongIcon/>
                <RightIcon/>
            </AnswerContainer>
        </motion.div>
    );
}

export default Answer;