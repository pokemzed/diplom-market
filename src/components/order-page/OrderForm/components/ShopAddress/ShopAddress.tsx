import React from 'react';
import {IOrderForm} from "@/types/order";
import {SHOPS_ADDRESSES} from "@/constants/general";

interface IShopAddress {
	formData: IOrderForm,
	setFormData: (data:IOrderForm) => void,
}

const ShopAddress: React.FC<IShopAddress> = ({ formData, setFormData }) => {
	return (
		<div className={"border p-2"}>
			<h3>Список магазинов</h3>

			<div>
				{
					SHOPS_ADDRESSES.map(elem => (
						<button
							disabled={elem.address === formData.shopAddress}
							className={"border-2"}
							key={elem.address}
							onClick={() => setFormData({...formData, shopAddress: elem.address})}
						>
							<h5>{elem.address}</h5>
							<p className="small">{elem.city}</p>
							<b>{elem.workTime}</b>
						</button>
					))
				}
			</div>
		</div>
	);
};

export default ShopAddress;
