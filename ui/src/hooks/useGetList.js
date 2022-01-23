import {useEffect, useState} from "react";
import axios from "axios";

const useGetList = (name) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8080/${name}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                }
            },
            {withCredentials: true},
            {crossorigin: true})
            .then(response => response.data)
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error?.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    return {data, error, isLoading};
};

export default useGetList;
