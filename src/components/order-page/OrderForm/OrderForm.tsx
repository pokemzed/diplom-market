import React, {FormEvent, useState} from 'react';
import styles from "./OrderForm.module.css";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {ORDER_FORM_INITIAL} from "@/constants/order";
import UserForm from "@/components/order-page/OrderForm/components/UserForm/UserForm";
import {EDelivery, EPayment, IOrderForm} from "@/types/order";
import {Form, Spinner} from "react-bootstrap";
import DeliverySelect from "@/components/order-page/OrderForm/components/DeliverySelect/DeliverySelect";
import AddressForm from "@/components/order-page/OrderForm/components/AddressForm/AddressForm";
import ShopAddress from "@/components/order-page/OrderForm/components/ShopAddress/ShopAddress";
import PaySelect from "@/components/order-page/OrderForm/components/PaySelect/PaySelect";
import OrderAmount from "@/components/order-page/OrderForm/components/OrderAmount/OrderAmount";
import {TOAST_ERROR} from "@/constants/toasts";
import {handleRequest} from "@/functions/handleRequest";
import {API_ORDER, API_ORDER_PLATI} from "@/constants/api";
import {REQUEST_METHODS} from "@/types/general";
import {LINK_ORDER_ID} from "@/constants/links";
import {clearShopCart} from "@/store/slices/shopCartSlice";

const OrderForm = () => {

	const dispatch = useAppDispatch();
	const shopCartData = useAppSelector(state => state.shopCart.data);
	const [formData, setFormData] = useState<IOrderForm>(ORDER_FORM_INITIAL(shopCartData));
	const [load, setLoad] = useState<boolean>(false);

	const handleSend = (e:FormEvent) => {
		e.preventDefault();

		if (formData.deliveryType === EDelivery.SELF && !formData.shopAddress) {
			TOAST_ERROR("Выберите магазин из которого будет совершен самовывоз!")
			return;
		}

		//TODO: логика редиректа на страницу оплаты и статуса заказа

		setLoad(true)
		handleRequest(REQUEST_METHODS.POST, API_ORDER, formData)
			.then(res => {
				if (res.data.paymentType === EPayment.ONLINE) {
					handleRequest(REQUEST_METHODS.POST, API_ORDER_PLATI(res.data._id), {})
						.then(res => console.log(res))
						.catch(err => console.log(err))
				}else {
					dispatch(clearShopCart()); //чистим корзину
					window.location.replace(LINK_ORDER_ID(res.data._id)) //редиректим на статус
				}
			})
			.catch(err => {
				TOAST_ERROR("Ошибка оформления заказа, пожалуйста попробуйте позже!")
				console.log(err)
			})
			.finally(() => setLoad(false))
	}

	return (
		<Form className={styles.OrderForm} onSubmit={handleSend}>
			<div className={styles.userAddress}>
				<UserForm formData={formData} setFormData={setFormData} />
				<DeliverySelect formData={formData} setFormData={setFormData} />
				{
					formData.deliveryType === EDelivery.COURIER &&
					<AddressForm formData={formData} setFormData={setFormData} />
				}
				{
					formData.deliveryType === EDelivery.SELF &&
					<ShopAddress formData={formData} setFormData={setFormData} />
				}
			</div>

			<div className={styles.payment}>
				<h3>Оплата</h3>
				<PaySelect formData={formData} setFormData={setFormData} />
				<OrderAmount shopCartData={shopCartData} formData={formData} />

				<button type={"submit"}>
					{load ? <Spinner size={"sm"} /> : "Оформить заказ"}
				</button>
			</div>
		</Form>
	);
};

export default OrderForm;
