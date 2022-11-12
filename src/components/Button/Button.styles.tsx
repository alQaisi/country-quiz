import React from "react";
import styled from "styled-components";

// export type ButtonProps=Omit<React.ComponentProps<"button">,"children">& {
//     children:string
// }

export interface ButtonProps extends React.ComponentProps<"button">{
    children:string
    className?:string
    onClick?:(event:React.MouseEvent<HTMLButtonElement>)=>void
}  

// export type ButtonProps= Omit<React.ComponentProps<"button">,"children">& {
//     children:string
// } 
 
export const ButtonCont=styled.button<ButtonProps>`
    border: 2px solid #1D355D;
    color: #1D355D;
    background-color: transparent;
    border-radius: 12px;
    font-weight:600;
    line-height: 1.5rem;
    font-size: 1rem;
    padding: 15px 35px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &.next{
        float: right;
    }
    &.center{
        display: block;
        margin: auto;
    }
    &.reload{
        border-color:#F2F2F2;
        color: #F2F2F2; 
    }
    &.reload:hover{
        color:#1D355D;
        background-color:#F2F2F2;
        border-color:#F2F2F2;
        box-shadow: none;
    }
    :hover{
        color: #F2F2F2;
        background: #F9A826;
        border-color: #F9A826;
        box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    }
`;