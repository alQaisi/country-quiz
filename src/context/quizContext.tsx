import React, { createContext, useContext ,useEffect, useState } from "react";
import { CountriesContext } from "./countriesContext";

type Question={
    answers:string[]
    answer:string
    text:string
    flag?:string
} | null | undefined

type Result=""|"wrong"|"right"|"now answerd"

type QuizContextType={
    Reset:()=>void
    onAnsClick:(event:React.MouseEvent<HTMLDivElement>)=>void
    Next:()=>void
    question:Question
    questionNumber:number
    results:Result[]
}

export const QuizContext=createContext<QuizContextType>({} as QuizContextType );

export function QuizProvider({children}:{children:React.ReactNode}){
    const { countries }=useContext(CountriesContext);
    
    const [questionNumber,setQuestionNumber]=useState(0);
    const [question,setQuestion]=useState<Question>(undefined);
    const [results,setResults]=useState<Result[]>(["","","",""]);

    function onAnsClick({target}:React.MouseEvent<HTMLDivElement>){
        if(!(target instanceof HTMLDivElement) )
            return; 
        if(!question)
            return;
        const { ans }=target.dataset;
        const correctIndex=question.answers.indexOf(question.answer);
        const ansIndex=ans?question.answers.indexOf(ans):-1;
        const results:Result[]=["now answerd","now answerd","now answerd","now answerd"];
        if(ans===question.answer)
            results[ansIndex]="right";
        else{
            results[ansIndex]="wrong";
            results[correctIndex]="right";
        }
        setResults(results);
    }

    function Next(){
        if(results.includes("wrong"))
            return setQuestion(null);
        setQuestion(undefined);
        setTimeout(() => {
            setResults(["","","",""]);
            setQuestionNumber(questionNumber+1); 
        },500);
    }

    function Reset(){
        setResults(["","","",""]);
        setQuestion(undefined);
        if(questionNumber===0)
            return setQuestionNumber(-1);
        setQuestionNumber(0)
    }

    useEffect(()=>{
        questionNumber===-1 && setQuestionNumber(0)
    },[questionNumber]);

    useEffect(()=>{
        if(countries.length && question===undefined && questionNumber!==-1){
            const questionTypes=["flag","capital"];
            const answers=[];
            let quizQuestion:Question={text:"",answer:"",answers:[""]};
            const answerNumber=Math.floor(Math.random()*4);            
            while(answers.length<4){
                const ans=Math.floor(Math.random()*countries.length);
                if(answers.indexOf(countries[ans].name.common)===-1)
                    answers.push(countries[ans].name.common);
                if(answers.length-1===answerNumber){
                    const type=countries[ans].capital?questionTypes[Math.floor(Math.random()*2)]:questionTypes[0];
                    if(type==="capital")
                        quizQuestion.text=`${countries[ans].capital[0]} is the capital of`;
                    else{
                        quizQuestion.text=`Which country does this flag belong to?`;
                        quizQuestion.flag=countries[ans].flags.svg;
                    }
                    quizQuestion.answer=countries[ans].name.common;
                }
            }
            setQuestion({...quizQuestion,answers:[...answers],}); 
        }
        //eslint-disable-next-line
    },[countries,questionNumber]);

    const value={ questionNumber, Reset, question, results, onAnsClick, Next };
    return(
        <QuizContext.Provider value={value}> { children } </QuizContext.Provider>
    );
}
