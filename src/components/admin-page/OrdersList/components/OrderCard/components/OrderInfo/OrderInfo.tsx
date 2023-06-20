import React from 'react';
import {EDelivery, EPayment, IOrderFormId} from "@/types/order";
import styles from "./OrderInfo.module.css";

interface IOrderInfo {
	data: IOrderFormId,
}

const OrderInfo: React.FC<IOrderInfo> = ({ data }) => {

	return (
		<div className={styles.OrderInfo}>
			<p>Дата: <b>{data.createdAt}</b></p>
			<p>Сумма: <b>{data.amount}₽</b></p>
			<p>Доставка: <b>{data.deliveryType === EDelivery.SELF ? "Самовывоз" : "Курьер"}</b></p>
			{
				data.deliveryType === EDelivery.SELF &&
				<p>Адрес магазина: <b>{data.shopAddress}</b></p>
			}
			{
				data.deliveryType === EDelivery.COURIER &&
				<p className={styles.address}>
					Адрес: <b>{data.address.address}</b> <br/>
					Адрес (название): <b>{data.address.addressName || "-"}</b> <br/>
					Комментарий к адресу: <b>{data.address.commentAddress || "-"}</b> <br/>
					Подъезд: <b>{data.address.entrance || "-"}</b> <br/>
					Этаж: <b>{data.address.floor || "-"}</b> <br/>
					Квартира: <b>{data.address.flat || "-"}</b> <br/>
					Домофон: <b>{data.address.intercom || "-"}</b> <br/>
				</p>
			}
			<p>Тип оплаты: <b>{data.paymentType === EPayment.ONLINE ? "Картой онлайн" : "При получении"}</b></p>
			<p>Статус заказа: <b>{data.completed ? "Завершен" : "Не завершен"}</b></p>

			<p>Имя: <b>{data.fullName}</b></p>
			<p>Телефон: <b>{data.phoneNumber}</b></p>
			<p>Комментарий: <b>{data.comment || '-'}</b></p>
		</div>
	);
};

export default OrderInfo;
