//css
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//other
import React from 'react';

interface IProviders {
	children: React.ReactNode
}

const Providers = ({ children }:IProviders) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default Providers;
