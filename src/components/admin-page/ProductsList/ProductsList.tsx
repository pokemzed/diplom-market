import React from 'react';
import styles from "./ProductsList.module.css";
import {useGetProducts} from "@/hooks/useGetProducts";
import {Badge} from "react-bootstrap";
import ProductCard from "@/components/admin-page/ProductsList/components/ProductCard/ProductCard";

const ProductsList = () => {

	const { data } = useGetProducts();

	if (!data.products.length) return;

	return (
		<div className={styles.ProductsList}>
			<Badge className={"w-100 mb-2 text-center"}>
				Список товаров ({data.loading ? "Обновление..." : data.products.length})
			</Badge>

			<div className={styles.content}>
				{
					data?.products?.map(elem => (
						<ProductCard key={elem._id} data={elem} />
					))
				}
			</div>
		</div>
	);
};

export default ProductsList;
