import React from 'react';
import {EPayment, IOrderForm} from "@/types/order";

interface IPaySelect {
	formData: IOrderForm,
	setFormData: (data:IOrderForm) => void,
}

const PaySelect: React.FC<IPaySelect> = ({ formData, setFormData }) => {
	return (
		<div>
			<button
				disabled={formData.paymentType === EPayment.ONLINE}
				onClick={() => setFormData({...formData, paymentType: EPayment.ONLINE})}
			>
				Картой онлайн
			</button>

			<button
				disabled={formData.paymentType === EPayment.CASH}
				onClick={() => setFormData({...formData, paymentType: EPayment.CASH})}
			>
				При получении
			</button>
		</div>
	);
};

export default PaySelect;
