import React from 'react';
import "./CategoryProducts.css";
import CategorySelect from "@/components/catalog-page/CategoryProducts/components/CategorySelect/CategorySelect";
import CategoryProductsList from "@/components/catalog-page/CategoryProducts/components/CategoryProductsList/CategoryProductsList";

const CategoryProducts = () => {
	return (
		<div className={"CategoryProductsList"}>
			<header>
				<CategorySelect />
				<CategoryProductsList />
			</header>
		</div>
	);
};

export default CategoryProducts;
