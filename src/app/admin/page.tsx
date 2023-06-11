'use client'
import React from 'react';
import CategoriesAdd from "@/components/admin-page/CategoriesAdd/CategoriesAdd";
import ProductAdd from "@/components/admin-page/ProductAdd/ProductAdd";

const page = () => {
	return (
		<div>
			<h1>admin</h1>
			<CategoriesAdd />
			<ProductAdd />
		</div>
	);
};

export default page;
