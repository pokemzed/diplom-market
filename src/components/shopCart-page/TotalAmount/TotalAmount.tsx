import React from 'react';
import styles from "./TotalAmount.module.css";
import {IShopCartAmount, IShopCartItem} from "@/types/shopCart";
import {useFetch} from "@/hooks/useFetch";
import {API_ORDER_AMOUNT} from "@/constants/api";
import {Button} from "react-bootstrap";
import Link from "next/link";
import {LINK_ORDER} from "@/constants/links";
import {REQUEST_METHODS} from "@/types/general";

interface ITotalAmount {
	shopCartData: IShopCartItem[],
}

const TotalAmount: React.FC<ITotalAmount> = ({ shopCartData }) => {

	//total amount
	const { data } = useFetch<IShopCartAmount>(API_ORDER_AMOUNT, REQUEST_METHODS.POST, {
		positions: shopCartData
	})

	//count for all products
	const productsCount = shopCartData.reduce((count, item) => count + item.quantity,0);

	//check data
	if (data)
	return (
		<div className={styles.TotalAmount}>
			<h5 className={"m-0 text-start"}>
				{productsCount} товар(ов,a): <b>{data?.amount}₽</b> <br/>
				Скидка: <b>{data?.amount - data?.discountedAmount}₽</b> <br/>
				Итого: <b>{data?.discountedAmount}₽</b>
			</h5>

			<Link href={LINK_ORDER}>
				<Button>
					Перейти к оформлению заказа
				</Button>
			</Link>
		</div>
	);
};

export default TotalAmount;
