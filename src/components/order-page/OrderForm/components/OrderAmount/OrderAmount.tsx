import React from 'react';
import {useFetch} from "@/hooks/useFetch";
import {IShopCartAmount, IShopCartItem} from "@/types/shopCart";
import {API_ORDER_AMOUNT} from "@/constants/api";
import {EDelivery, IOrderForm} from "@/types/order";
import {REQUEST_METHODS} from "@/types/general";
import {Alert} from "react-bootstrap";
import {MIN_ORDER_PRICE} from "@/constants/general";

interface IOrderAmount {
	shopCartData: IShopCartItem[],
	formData: IOrderForm,
}

const OrderAmount: React.FC<IOrderAmount> = ({ shopCartData, formData }) => {

	//count for all products
	const productsCount = shopCartData.reduce((count, item) => count + item.quantity,0);

	//amount data
	const { data:amountData } = useFetch<IShopCartAmount>(API_ORDER_AMOUNT, REQUEST_METHODS.POST, {
		positions: shopCartData
	}, false);

	if (amountData && amountData.amountWithDelivery) {
		return (
			<div>
				<div>
					<p className={"m-0 fw-bold"}>{productsCount} товар(ов,a)</p>
					<p>{amountData.discountedAmount}₽</p>
				</div>

				{
					formData.deliveryType === EDelivery.COURIER &&
					<div>
						<p className={"m-0 fw-bold"}>Доставка курьером</p>
						<p>{amountData.amountWithDelivery - amountData.discountedAmount}₽</p>
						{
							!!(amountData.amountWithDelivery - amountData.discountedAmount) &&
							<Alert className={"small p-2 text-center"}>
								Бесплатная доставка при заказке от {MIN_ORDER_PRICE}₽
							</Alert>
						}
					</div>
				}

				<div>
					<p className={"m-0 fw-bold"}>Итого к оплате:</p>
					<p>
						{
							formData.deliveryType === EDelivery.COURIER ?
								amountData.amountWithDelivery:
								amountData.discountedAmount
						}₽
					</p>
				</div>
			</div>
		)
	}
};

export default OrderAmount;
