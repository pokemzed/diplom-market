'use client'
//css
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

//other
import React from 'react';
import Toast from "@/components/general/Toast/Toast";

interface IProviders {
	children: React.ReactNode
}

const Providers = ({ children }:IProviders) => {
	return (
		<>
			<Toast />
			{children}
		</>
	);
};

export default Providers;
