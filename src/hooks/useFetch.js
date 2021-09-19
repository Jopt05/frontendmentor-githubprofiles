import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [Information, setInformation] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {

        if( !url ) {
            return;
        }

        console.log(url)

        axios({
            method:"GET",
            timeout: 10000,
            url: url
        })
        .then( response => response.data )
        .then( data => setInformation({
            data: data,
            loading: false,
            error: null
        }) )
        
    }, [url])

    return Information;

}