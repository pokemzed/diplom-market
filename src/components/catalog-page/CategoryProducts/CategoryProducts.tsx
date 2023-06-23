import React from 'react';
import CategorySelect from "@/components/catalog-page/CategoryProducts/components/CategorySelect/CategorySelect";
import CategoryProductsList from "@/components/catalog-page/CategoryProducts/components/CategoryProductsList/CategoryProductsList";
import {useGetCategories} from "@/hooks/useGetCategories";
import SpinnerPrimary from "@/ui/SpinnerPrimary/SpinnerPrimary";

const CategoryProducts = () => {

	const { data:{selected} } = useGetCategories();

	if (!selected) {
		return (
			<div className={"w-100 py-5 d-flex"}>
				<SpinnerPrimary />
			</div>
		)
	}

	return (
		<div className={"CategoryProductsList"}>
			<CategorySelect />
			<CategoryProductsList selected={selected} />
		</div>
	);
};

export default CategoryProducts;
