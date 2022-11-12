import { motion } from "framer-motion";
import { Answer as AnswerContainer, WrongIcon, RightIcon } from "./answer.styles";

const answerAnimations = {
    hidden: { x:-100,opacity: .0 },
    show: { x:0,opacity: 1 },
}

const chars=["A","B","C","D"];

type AnswerProps={
    onAnsClick(event:React.MouseEvent<HTMLDivElement>):void
    result:""|"wrong"|"right"|"now answerd"
    index:number
    children:string
}

function Answer({onAnsClick,result,index,children}:AnswerProps) {
    return (
        <motion.div variants={answerAnimations}>
            <AnswerContainer data-ans={children} onClick={onAnsClick} result={result}>
                <span>{ chars[index] }</span>
                { children }
                <WrongIcon/>
                <RightIcon/>
            </AnswerContainer>
        </motion.div>
    );
}

export default Answer;