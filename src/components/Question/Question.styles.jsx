import styled,{ css } from "styled-components";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { ReactComponent as loading } from "../../assets/loading.svg";

export const Loading=styled(loading)`
    width: 225px;
    height: auto;
    display: block;
    margin: 25px auto;
`;

const IconStyles=css`
    color: #F2F2F2;
    width: 25px;
    height: 25px;
    flex-shrink:0;
    display: none;
    /* position: absolute;
    right: 20px; */
    margin-left: auto;
`;

export const WrongIcon=styled(AiOutlineCloseCircle)`
    ${IconStyles};
`;
export const RightIcon=styled(AiOutlineCheckCircle)`
    ${IconStyles};
`;

export const Flag=styled.img`
    display: block;
    width:125px;
    height:auto;
    margin-bottom: 28px;
    border: 1px solid rgba(0,0,0,.25);
`

export const QuestionTitle=styled.h2`
    color: #2F527B;
    line-height: 2rem;
    font-size: 1.33rem;
    font-weight: 700;
    margin-bottom: 32px;
`;

const WrongStyles=css`
    background: #EA8282;
    color: #FFFFFF;
    border-color:#EA8282;
    pointer-events:none;
    ${WrongIcon}{
        display: initial;
    }
`;
const RighStyles=css`
    background: #60BF88;
    color: #FFFFFF;
    border-color:#60BF88;
    pointer-events:none;
    ${RightIcon}{
        display: initial;
    }
`;

export const Answer=styled.div`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid rgba(96, 102, 208, 0.7);
    border-radius: 12px;
    padding: 10px 20px 10px;
    margin: 25px auto;
    position: relative;
    font-size: 1rem;
    display: flex;
    justify-content:flex-start;
    gap:0px 15%;
    align-items: center;
    color: rgba(96, 102, 208, 0.8);
    font-weight: 500;
    cursor: pointer;
    transition: all .15s ease-in-out;
    &:hover{
        background: #F9A826;
        color: #FFFFFF;
        border-color:#F9A826;
    }
    & span{
        font-size: 1.33rem;
        line-break: 2rem;
    }
    ${(props)=>{
        if(props.result==="wrong")
            return WrongStyles;
        else if(props.result==="right")
            return RighStyles;
        if(props.result)
            return `pointer-events:none;`
    }}
    & *{
        pointer-events: none;
    }
`;
