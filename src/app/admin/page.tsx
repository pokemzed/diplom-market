'use client'
import React from 'react';
import CategoriesAdd from "@/components/admin-page/CategoriesAdd/CategoriesAdd";
import ProductAdd from "@/components/admin-page/ProductAdd/ProductAdd";
import CategoriesList from "@/components/admin-page/CategoriesList/CategoriesList";
import ProductsList from "@/components/admin-page/ProductsList/ProductsList";
import OrdersList from "@/components/admin-page/OrdersList/OrdersList";
import {Container} from "react-bootstrap";

const page = () => {
	return (
		<Container className={"pt-3 pb-3"}>
			<OrdersList />
			<hr className={"my-5"} />
			<CategoriesAdd />
			<hr className={"my-5"} />
			<CategoriesList />
			<hr className={"my-5"} />
			<ProductAdd />
			<hr className={"my-5"} />
			<ProductsList />
		</Container>
	);
};

export default page;
