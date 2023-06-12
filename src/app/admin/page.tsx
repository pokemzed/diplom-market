'use client'
import React from 'react';
import CategoriesAdd from "@/components/admin-page/CategoriesAdd/CategoriesAdd";
import ProductAdd from "@/components/admin-page/ProductAdd/ProductAdd";
import CategoriesList from "@/components/admin-page/CategoriesList/CategoriesList";

const page = () => {
	return (
		<div className={"p-3"}>
			<h1>Admin page</h1>
			<CategoriesAdd />
			<CategoriesList />
			<ProductAdd />
		</div>
	);
};

export default page;
