import React from 'react';
import {IOrderForm} from "@/types/order";

interface IAddressForm {
	formData: IOrderForm,
	setFormData: (data:IOrderForm) => void,
}

const AddressForm: React.FC<IAddressForm> = ({ formData, setFormData }) => {
	return (
		<div className={"border p-2"}>
			<input
				required
				placeholder={"Адрес доставки"}
				value={formData.address.address}
				onChange={e => setFormData({...formData, address: {...formData.address, address: e.target.value}})}
			/>

			<input
				placeholder={"Название адреса (необязательно)"}
				value={formData.address.addressName}
				onChange={e => setFormData({...formData, address: {...formData.address, addressName: e.target.value}})}
			/>

			<input
				placeholder={"Квартира, офис"}
				value={formData.address.flat}
				onChange={e => setFormData({...formData, address: {...formData.address, flat: e.target.value}})}
			/>

			<input
				placeholder={"Подъезд"}
				value={formData.address.entrance}
				onChange={e => setFormData({...formData, address: {...formData.address, entrance: e.target.value}})}
			/>

			<input
				placeholder={"Домофон"}
				value={formData.address.intercom}
				onChange={e => setFormData({...formData, address: {...formData.address, intercom: e.target.value}})}
			/>

			<input
				type={"number"}
				placeholder={"Этаж"}
				value={formData.address.floor || ""}
				onChange={e => setFormData({...formData, address: {...formData.address, floor: +e.target.value}})}
			/>

			<textarea
				placeholder={"Комментарий к адресу"}
				value={formData.address.commentAddress}
				onChange={e => setFormData({...formData, address: {...formData.address, commentAddress: e.target.value}})}
			/>
		</div>
	);
};

export default AddressForm;
