import { createContext, useEffect, useState } from "react";

export const CountriesContext=createContext({});

export function CountriesProvider({children}){

    const [countries,setCountries]=useState([]);
    const [isError,setIsError]=useState(false);

    useEffect(()=>{
        const abortController=new AbortController();
        const fetchData=async()=>{
            try{
                setIsError(false);
                const response=await fetch("https://restcountries.com/v3.1/all");
                const data=await response.json();
                setCountries(data);
            }catch(err){
                if(!abortController.signal.aborted){
                    setIsError(true);
                }
            }
        }
        fetchData();
        return ()=>{
            abortController.abort();
        }
    },[]);
    const value={countries,isError};
    return(
        <CountriesContext.Provider value={value}> { children }</CountriesContext.Provider>
    );
}