import { useState,useEffect } from "react";
import { Country } from "../context/countriesContext";
import axios from "axios";



function useAxios():{ countries:Country[],isError:boolean }{
    
    const [countries,setCountries]=useState<Country[]>([] as Country[]);
    const [isError,setIsError]=useState(false);


    const controller = new AbortController();
    
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all",{ signal:controller.signal })
        .then(response=>setCountries(response.data))
        .catch(()=>setIsError(true));
        return ()=>controller.abort();
        //eslint-disable-next-line
    },[]);
    return { isError,countries };
}

export default useAxios;