import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "@/constants/api";

export const useFetch = <T>(url:string, method?:string, body?:object) => {
	const [data, setData] = useState<T | null>(null);
	const [load, setLoad] = useState<boolean>(false);
	const [error, setError] = useState<null | string>(null);

	const options = {
		method: method || "GET",
		url: API_URL + url,
		headers: {'Content-Type': 'application/json'},
		data: body || {},
	};

	const handleFetch = () => {
		setLoad(true);
		axios.request(options)
			.then(res => setData(res.data))
			.catch(err => setError(err.message))
			.finally(() => setLoad(false));
	}

	useEffect(() => {
		handleFetch()
	},[JSON.stringify(options)])

	return { data, error, load }
}
