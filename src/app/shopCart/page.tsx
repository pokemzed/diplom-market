'use client'
import React from 'react';
import ProductsList from "@/components/shopCart-page/ProductsList/ProductsList";
import {useAppDispatch, useAppSelector} from "@/store/store";
import TotalAmount from "@/components/shopCart-page/TotalAmount/TotalAmount";
import {clearShopCart} from "@/store/slices/shopCartSlice";

const page = () => {

	const shopCartData = useAppSelector(state => state.shopCart.data);
	const dispatch = useAppDispatch();

	const handleClear = () => {
		dispatch(clearShopCart())
	}

	if (shopCartData.length){
		return (
			<div>
				<h1>Корзина товаров</h1>
				<button onClick={handleClear}>
					Очистить корзину
				</button>
				<ProductsList shopCartData={shopCartData} />
				<TotalAmount shopCartData={shopCartData} />
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
