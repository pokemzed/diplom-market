'use client'
//css
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//other
import React from 'react';
import Toast from "@/ui/Toast/Toast";
import {Provider} from "react-redux";
import store, {persistedStore} from "@/store/store";
import NavbarTop from "@/components/general/NavbarTop/NavbarTop";
import {PersistGate} from "redux-persist/integration/react";
import FooterBottom from "@/components/general/FooterBottom/FooterBottom";
import TestWebsiteAlert from "@/components/general/TestWebsiteAlert/TestWebsiteAlert";

interface IProviders {
	children: React.ReactNode
}

const Providers = ({ children }:IProviders) => {

	return (
		<Provider store={store}>
			<PersistGate persistor={persistedStore}>
				<Toast />
				<TestWebsiteAlert />
				<NavbarTop />
				{children}
				<FooterBottom />
			</PersistGate>
		</Provider>
	);
};

export default Providers;
