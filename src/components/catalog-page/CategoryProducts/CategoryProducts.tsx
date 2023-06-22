import React from 'react';
import CategorySelect from "@/components/catalog-page/CategoryProducts/components/CategorySelect/CategorySelect";
import CategoryProductsList from "@/components/catalog-page/CategoryProducts/components/CategoryProductsList/CategoryProductsList";
import {useGetCategories} from "@/hooks/useGetCategories";
import {Spinner} from "react-bootstrap";

const CategoryProducts = () => {

	const { data:{selected} } = useGetCategories();

	if (!selected) return <Spinner />;

	return (
		<div className={"CategoryProductsList"}>
			<CategorySelect />
			<CategoryProductsList selected={selected} />
		</div>
	);
};

export default CategoryProducts;
