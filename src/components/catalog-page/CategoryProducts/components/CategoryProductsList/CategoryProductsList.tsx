import React from 'react';
import "./CategoryProductsList.css";
import {useFetch} from "@/hooks/useFetch";
import {API_CATEGORY_ITEMS} from "@/constants/api";
import {IProductId} from "@/types/products";
import ProductCard from "@/components/general/ProductCard/ProductCard";

const CategoryProductsList = ({selected} : {selected:string}) => {

	//@ts-ignore
	const { data } = useFetch<IProductId[]>(API_CATEGORY_ITEMS(selected), 'GET', {});

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
