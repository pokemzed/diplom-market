'use client'
//css
import './globals.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//toast
import 'react-toastify/dist/ReactToastify.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//other
import React from 'react';
import Toast from "@/components/general/Toast/Toast";
import {Provider} from "react-redux";
import store from "@/store/store";

interface IProviders {
	children: React.ReactNode
}

const Providers = ({ children }:IProviders) => {

	return (
		<Provider store={store}>
			<Toast />
			{children}
		</Provider>
	);
};

export default Providers;
