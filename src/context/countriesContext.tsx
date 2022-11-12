import React, { createContext } from "react";
import useAxios from "../utlis/useAxios";

export type Country={
    name:{common:string,official:string,nativeName:{} | string[]},
    flags:{png:string,svg:string}
    capital:[string]
}

export type CountriesContextType={
    countries:Country[] | []
    isError:boolean
}

export const CountriesContext=createContext<CountriesContextType>({} as CountriesContextType);

export function CountriesProvider({children}:{children:React.ReactNode}){

    const { countries,isError }=useAxios();

    const value={countries,isError};
    return(
        <CountriesContext.Provider value={value}> { children }</CountriesContext.Provider>
    );
}