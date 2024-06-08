import React from 'react';
import styles from './ShopCartBtn.module.css';
import {IProductId, IProductPrice} from "@/types/products";
import {useDispatch} from "react-redux";
import {IShopCartItem} from "@/types/shopCart";
import {addItem, removeItem} from "@/store/slices/shopCartSlice";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {TOAST_ERROR} from "@/constants/toasts";

interface IShopCartBtn {
	selected: IProductPrice,
	shopCartData: IShopCartItem[],
	product: IProductId,
}

const ShopCartBtn: React.FC<IShopCartBtn> = ({ selected, shopCartData, product }) => {

	const dispatch = useDispatch();
	const user = globalThis.localStorage.getItem("user")
	const thisItem = shopCartData.find(item => item.itemId === product._id && item.weight === selected.weight);

	const shopCartObject:IShopCartItem = {
		itemId: product._id,
		quantity: thisItem?.quantity || 1,
		price: selected.price,
		weight: selected.weight,
	};

	const handleAdd = () => {
		if(!user){
			return TOAST_ERROR('Необходима авторизация для тобавления товара')
		}
		dispatch(addItem(shopCartObject))
	}

	const handleRemove = () => {
		dispatch(removeItem(shopCartObject))
	}

	const renderTooltip = (props: any) => (
		<Tooltip id="button-tooltip" {...props}>
			Товар доступен только по предзаказу
		</Tooltip>
	);

	if (!product.available) {
		return (
			<OverlayTrigger
				placement="bottom"
				overlay={renderTooltip}
			>
			<button className={`${styles.ShopCartBtn} ${styles.noItems}`} type="button">
				Предзаказ
			</button>
			</OverlayTrigger>
		)
	}

	if (thisItem) {
		return (
			<div className={styles.ShopCartBtnActive}>
				<button type="button" onClick={handleRemove}>
					-
				</button>

				<button disabled>{thisItem.quantity}</button>

				<button type="button" onClick={handleAdd}>
					+
				</button>
			</div>
		)
	}

	return (
		<button className={styles.ShopCartBtn} type="button" onClick={handleAdd}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.5 8.77157H9.23529V15.1245H6.73529V8.77157H0.5V6.50687H6.73529V0.124512H9.23529V6.50687H15.5V8.77157Z"
					fill="white"/>
			</svg>
		</button>
	);
};

export default ShopCartBtn;
