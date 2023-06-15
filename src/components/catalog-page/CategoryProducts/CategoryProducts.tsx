import React from 'react';
import CategorySelect from "@/components/catalog-page/CategoryProducts/components/CategorySelect/CategorySelect";
import CategoryProductsList from "@/components/catalog-page/CategoryProducts/components/CategoryProductsList/CategoryProductsList";
import {useGetCategories} from "@/hooks/useGetCategories";

const CategoryProducts = () => {

	const { data:{selected} } = useGetCategories();

	if (!selected) return;

	return (
		<div className={"CategoryProductsList"}>
			<header>
				<CategorySelect />
				<CategoryProductsList selected={selected} />
			</header>
		</div>
	);
};

export default CategoryProducts;
