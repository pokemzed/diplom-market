import React, {FormEvent, useState} from 'react';
import styles from "./OrderForm.module.css";
import {useAppSelector} from "@/store/store";
import {ORDER_FORM_INITIAL} from "@/constants/order";
import UserForm from "@/components/order-page/OrderForm/components/UserForm/UserForm";
import {EDelivery, IOrderForm} from "@/types/order";
import {Form} from "react-bootstrap";
import DeliverySelect from "@/components/order-page/OrderForm/components/DeliverySelect/DeliverySelect";
import AddressForm from "@/components/order-page/OrderForm/components/AddressForm/AddressForm";
import ShopAddress from "@/components/order-page/OrderForm/components/ShopAddress/ShopAddress";
import PaySelect from "@/components/order-page/OrderForm/components/PaySelect/PaySelect";
import OrderAmount from "@/components/order-page/OrderForm/components/OrderAmount/OrderAmount";
import {TOAST_ERROR} from "@/constants/toasts";

const OrderForm = () => {

	const shopCartData = useAppSelector(state => state.shopCart.data);
	const [formData, setFormData] = useState<IOrderForm>(ORDER_FORM_INITIAL(shopCartData));

	const handleSend = (e:FormEvent) => {
		e.preventDefault();

		if (formData.deliveryType === 'SELF' && !formData.shopAddress) {
			TOAST_ERROR("Выберите магазин из которого будет совершен самовывоз!")
			return;
		}

		console.log(formData);
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
					Оформить заказ
				</button>
			</div>
		</Form>
	);
};

export default OrderForm;
