import {API_URL} from "@/constants/api";
import axios, {AxiosResponse} from "axios";
import {REQUEST_METHODS} from "@/types/general";

export const handleRequest = (method:REQUEST_METHODS, url:string, data:any): Promise<AxiosResponse> => {
	const options = {
		method: method,
		url: API_URL + url,
		headers: {'Content-Type': 'application/json'},
		data: data
	};

	return axios.request(options)
}