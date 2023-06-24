import React from 'react';
import styles from "./OrderProductItem.module.css";
import {IShopCartItem} from "@/types/shopCart";
import {useFetch} from "@/hooks/useFetch";
import {API_PRODUCT_ID} from "@/constants/api";
import {REQUEST_METHODS} from "@/types/general";
import {IProductId} from "@/types/products";
import Link from "next/link";
import {LINK_PRODUCT} from "@/constants/links";

interface IOrderProductItem {
	data: IShopCartItem,
}

const OrderProductItem: React.FC<IOrderProductItem> = ({ data }) => {

	const { data:itemData } = useFetch<IProductId>(API_PRODUCT_ID(data.itemId), REQUEST_METHODS.GET, {}, false);

	if (!itemData) return;

	return (
		<div className={styles.OrderProductItem}>
			<Link href={LINK_PRODUCT(itemData._id)}>
				<h5>{itemData.name}</h5>
			</Link>
			<p className={"small"}>Вес: <b>{data.weight} грамм</b></p>
			<p className={"small"}>Кол-во: <b>{data.quantity} шт.</b></p>
			<p className="small">Состав: <b>{itemData.composition}</b></p>
		</div>
	);
};

export default OrderProductItem;
