import React from 'react';
import {LINK_SHOP_CART} from "@/constants/links";
import {Button} from "react-bootstrap";
import Link from "next/link";
import {useAppSelector} from "@/store/store";
import {useFetch} from "@/hooks/useFetch";
import {IShopCartAmount} from "@/types/shopCart";
import {API_ORDER_AMOUNT} from "@/constants/api";

const ShopCartLink = () => {

	//shop cart data from redux
	const shopCartData = useAppSelector(state => state.shopCart.data);

	//count for all products
	const productsCount = shopCartData.reduce((count, item) => count + item.quantity,0);

	//total amount
	const { data:amountData } = useFetch<IShopCartAmount>(API_ORDER_AMOUNT, "POST", {
		positions: shopCartData
	})

	return (
		<Link href={LINK_SHOP_CART}>
			<Button variant={"success"}>
				Корзина
				{productsCount && <span>({productsCount})</span>}
				{amountData && <span>({amountData.discountedAmount.toFixed() + "₽"})</span>}
			</Button>
		</Link>
	);
};

export default ShopCartLink;
