import React from 'react';
import styles from "./TotalAmount.module.css";
import {IShopCartAmount, IShopCartItem} from "@/types/shopCart";
import {useFetch} from "@/hooks/useFetch";
import {API_ORDER_AMOUNT} from "@/constants/api";
import {Alert, Badge, Button} from "react-bootstrap";
import {DELIVERY_PRICE, MIN_ORDER_PRICE} from "@/constants/general";
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

	return (
		<div className={styles.TotalAmount}>
			{
				(data?.amount && data?.amount < MIN_ORDER_PRICE) &&
				<Alert className={"p-2 small"}>
					Сейчас стоимость доставки составляет {DELIVERY_PRICE} рублей.
					Для бесплатной доставки стоимость заказа должна
					составлять не менее {MIN_ORDER_PRICE} рублей.
				</Alert>
			}

			<Badge className={"mb-2"}>
				<h5 className={"m-0 text-start"}>
					Итоговая сумма: {data?.amountWithDelivery}₽<br/>
				</h5>
			</Badge>

			<Link href={LINK_ORDER}>
				<Button>
					Перейти к оформлению заказа
				</Button>
			</Link>
		</div>
	);
};

export default TotalAmount;
