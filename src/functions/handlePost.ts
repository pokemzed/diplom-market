import {API_URL} from "@/constants/api";
import axios, {AxiosResponse} from "axios";

export const handlePost = (method:string, url:string, data:any): Promise<AxiosResponse> => {
	const options = {
		method: method,
		url: API_URL + url,
		headers: {'Content-Type': 'application/json'},
		data: data
	};

	return axios.request(options)
}
