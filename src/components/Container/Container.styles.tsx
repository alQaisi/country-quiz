import styled from "styled-components";

export const ErrorCont=styled.div`
    color: #F2F2F2;
    text-align: center;
    & button{
        display: block;
        margin:50px auto;
    }
`;

type QuizContainerProps={
    children:JSX.Element[] | JSX.Element
}

export const QuizContainer=styled.div<QuizContainerProps>`
    background-color: #FFFFFF;
    border-radius: 24px;
    width: 95%;
    margin: 25px auto 25px;
    max-width: 464px;
    padding: 70px 32px 32px;
    position: relative;
    &::before{
        content: "COUNTRY QUIZ";
        position: absolute;
        font-weight: 700;
        top:-55px;
        left: 0;
        color: #F2F2F2;
        font-size: 2rem;
        line-height: 3rem;
    }
    @media screen and (max-width:475px) {
        &::before{
            font-size: 1.35rem;
        }
    }
`;