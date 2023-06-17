import React from 'react';
import {EDelivery, IOrderForm} from "@/types/order";

interface IDeliverySelect {
	formData: IOrderForm,
	setFormData: (data:IOrderForm) => void,
}

const DeliverySelect: React.FC<IDeliverySelect> = ({ formData, setFormData }) => {
	return (
		<div className={"border p-2"}>
			<button
				disabled={formData.deliveryType === EDelivery.COURIER}
				onClick={() => setFormData({...formData, deliveryType: EDelivery.COURIER})}
			>
				Доставка
			</button>

			<button
				disabled={formData.deliveryType === EDelivery.SELF}
				onClick={() => setFormData({...formData, deliveryType: EDelivery.SELF})}
			>
				Самовывоз
			</button>
		</div>
	);
};

export default DeliverySelect;
