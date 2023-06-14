import React from 'react';
import "./CategoryProductsList.css";
import {useGetCategories} from "@/hooks/useGetCategories";
import {useFetch} from "@/hooks/useFetch";
import {API_CATEGORY_ITEMS} from "@/constants/api";
import {IProductId} from "@/types/products";
import ProductCard from "@/components/general/ProductCard/ProductCard";

const CategoryProductsList = () => {

	const { data:{selected, categories} } = useGetCategories();
	const { data } = useFetch<IProductId[]>(API_CATEGORY_ITEMS(selected || categories?.[0]?._id), 'GET', {});

	if (!data) return;

	return (
		<div className={"CategoryProductsList"}>
			<div className="products-container">
				{
					!!data.length && data.map(elem => (
						<ProductCard key={elem._id} data={elem} />
					))
				}
			</div>

			{!data.length && <p>Список товаров данной категории пуст</p>}
		</div>
	);
};

export default CategoryProductsList;
