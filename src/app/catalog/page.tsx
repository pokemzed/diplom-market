'use client'
import React from 'react';
import CategoryProducts from "@/components/catalog-page/CategoryProducts/CategoryProducts";

const page = () => {
	return (
		<div className={"p-3"}>
			<h1>Каталог</h1>
			<CategoryProducts />
		</div>
	);
};

export default page;
