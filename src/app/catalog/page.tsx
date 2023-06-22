'use client'
import React from 'react';
import CategoryProducts from "@/components/catalog-page/CategoryProducts/CategoryProducts";
import {Container} from "react-bootstrap";
import CatalogBanner from "@/components/catalog-page/CatalogBanner/CatalogBanner";

const page = () => {

	return (
		<Container>
			<CatalogBanner />
			<CategoryProducts />
		</Container>
	);
};

export default page;
