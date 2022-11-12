import styled from "styled-components";
import { ReactComponent as loading } from "../../assets/loading.svg";

export const Loading=styled(loading)`
    width: 225px;
    height: auto;
    display: block;
    margin: 25px auto;
`;

export const Flag=styled.img`
    display: block;
    width:125px;
    height:auto;
    margin-bottom: 28px;
    border: 1px solid rgba(0,0,0,.25);
`;

export const QuestionTitle=styled.h2`
    color: #2F527B;
    line-height: 2rem;
    font-size: 1.33rem;
    font-weight: 700;
    margin-bottom: 32px;
`;
