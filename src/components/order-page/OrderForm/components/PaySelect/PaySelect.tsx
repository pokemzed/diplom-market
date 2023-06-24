import React from 'react';
import {EPayment, IOrderForm} from "@/types/order";
import styles from "./PaySelect.module.css";

interface IPaySelect {
	formData: IOrderForm,
	setFormData: (data:IOrderForm) => void,
}

const PaySelect: React.FC<IPaySelect> = ({ formData, setFormData }) => {
	return (
		<div className={styles.PaySelect}>
			<button
				disabled={formData.paymentType === EPayment.ONLINE}
				onClick={() => setFormData({...formData, paymentType: EPayment.ONLINE})}
			>
				<div className={styles.left}>
					<div className={styles.circle} />
					<p>Картой онлайн</p>
				</div>
				<img src="/icons/bank-card.svg" alt="online"/>
			</button>

			<button
				disabled={formData.paymentType === EPayment.CASH}
				onClick={() => setFormData({...formData, paymentType: EPayment.CASH})}
			>
				<div className={styles.left}>
					<div className={styles.circle} />
					<p>При получении</p>
				</div>
				<img src="/icons/cash.svg" alt="cash"/>
			</button>
		</div>
	);
};

export default PaySelect;
