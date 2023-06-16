'use client'
import React from 'react';
import ProductsList from "@/components/shopCart-page/ProductsList/ProductsList";
import {useAppSelector} from "@/store/store";

const page = () => {

	const shopCartData = useAppSelector(state => state.shopCart.data);

	if (shopCartData.length){
		return (
			<div>
				<h1>Корзина товаров</h1>
				<ProductsList shopCartData={shopCartData} />
			</div>
		);
	}else {
		return (
			<div>
				<h1>Корзина пуста</h1>
			</div>
		)
	}
};

export default page;
