import React from 'react';
import styles from "./TotalAmount.module.css";
import {IShopCartAmount, IShopCartItem} from "@/types/shopCart";
import {useFetch} from "@/hooks/useFetch";
import {API_ORDER_AMOUNT} from "@/constants/api";
import {Alert, Badge, Button} from "react-bootstrap";
import {MIN_ORDER_PRICE} from "@/constants/general";

interface ITotalAmount {
	shopCartData: IShopCartItem[],
}

const TotalAmount: React.FC<ITotalAmount> = ({ shopCartData }) => {

	//total amount
	const { data } = useFetch<IShopCartAmount>(API_ORDER_AMOUNT, "POST", {
		positions: shopCartData
	})

	return (
		<div className={styles.TotalAmount}>
			<Badge className={"mb-2"}>
				<h5 className={"m-0 text-start"}>
					Итоговая цена товаров без скидки: {data?.amount}₽<br/>
					Итоговая цена товаров с учетом скидки: {data?.discountedAmount}₽<br/>
					{(data?.amount && data?.amount < MIN_ORDER_PRICE) && <span>Цена доставки: 300₽</span>}
				</h5>
			</Badge>

			{
				(data?.amount && data?.amount < MIN_ORDER_PRICE) &&
				<Alert>
					Сейчас стоимость доставки составляет 300 рублей.
					Для бесплатной доставки стоимость заказа должна
					составлять не менее {MIN_ORDER_PRICE} рублей.
				</Alert>
			}

			<Button>
				Перейти к оформлению заказа
			</Button>
		</div>
	);
};

export default TotalAmount;
