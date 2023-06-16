import React from 'react';
import styles from './ShopCartBtn.module.css';
import {IProductPrice} from "@/types/products";

interface IShopCartBtn {
	selected: IProductPrice,
}

const ShopCartBtn: React.FC<IShopCartBtn> = ({ selected }) => {
	return (
		<div className={styles.ShopCartBtn}>
			<button
				onClick={() => console.log(selected.price, selected.weight)}
			>
				+
			</button>
		</div>
	);
};

export default ShopCartBtn;
