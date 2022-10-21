import { createContext } from "react";
import useAxios from "../utlis/useAxios";

export const CountriesContext=createContext({});

export function CountriesProvider({children}){

    const { countries,isError }=useAxios();

    const value={countries,isError};
    return(
        <CountriesContext.Provider value={value}> { children }</CountriesContext.Provider>
    );
}