import { createContext, useContext ,useEffect, useState } from "react";
import { CountriesContext } from "./countriesContext";

export const QuizContext=createContext({});

export function QuizProvider({children}){
    const { countries }=useContext(CountriesContext);
    
    const [questionNumber,setQuestionNumber]=useState(0);
    const [question,setQuestion]=useState(undefined);
    const [results,setResults]=useState(["","","",""]);

    useEffect(()=>{
        if(countries.length){
            const questionTypes=["flag","capital"];
            const answers=[];
            let quizQuestion={};
            const answerNumber=Math.floor(Math.random()*4);            
            while(answers.length<4){
                const ans=Math.floor(Math.random()*countries.length);
                if(answers.indexOf(countries[ans].name.common)===-1)
                    answers.push(countries[ans].name.common);
                if(answers.length-1===answerNumber){
                    const type=countries[ans].capital[0]?questionTypes[Math.floor(Math.random()*2)]:questionTypes[0];
                    if(type==="flag")
                        quizQuestion.text=`${countries[ans].capital[0]} is the capital of`;
                    else{
                        quizQuestion.text=`Which country does this flag belong to?`;
                        quizQuestion.flag=countries[ans].flags.svg;
                    }
                    quizQuestion.answer=countries[ans].name.common;
                }
            }
            setQuestion({...quizQuestion,answers:[...answers]}); 
        }
    },[countries,questionNumber]);

    console.log(question);

    const value={ questionNumber, setQuestionNumber, question, results };
    return(
        <QuizContext.Provider value={value}> { children } </QuizContext.Provider>
    );
}
