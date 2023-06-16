'use client'
//css
import './globals.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//toast
import 'react-toastify/dist/ReactToastify.css';
//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//other
import React from 'react';
import Toast from "@/components/general/Toast/Toast";
import {Provider} from "react-redux";
import store, {persistedStore} from "@/store/store";
import NavbarTop from "@/components/general/NavbarTop/NavbarTop";
import {PersistGate} from "redux-persist/integration/react";

interface IProviders {
	children: React.ReactNode
}

const Providers = ({ children }:IProviders) => {

	return (
		<Provider store={store}>
			<PersistGate persistor={persistedStore}>
				<Toast />
				<NavbarTop />
				{children}
			</PersistGate>
		</Provider>
	);
};

export default Providers;
