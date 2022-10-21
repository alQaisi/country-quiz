import { useState,useEffect } from "react";
import axios from "axios";

function useAxios(){
    
    const [countries,setCountries]=useState([]);
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