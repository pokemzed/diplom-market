'use client'
import React from 'react';
import ProductsList from "@/components/shopCart-page/ProductsList/ProductsList";
import {useAppSelector} from "@/store/store";
import TotalAmount from "@/components/shopCart-page/TotalAmount/TotalAmount";
import ClearShopCartBtn from "@/components/shopCart-page/ClearShopCartBtn/ClearShopCartBtn";
import BackLink from "@/ui/BackLink/BackLink";
import {LINK_CATALOG} from "@/constants/links";
import {Container} from "react-bootstrap";
import styles from "./page.module.css";
import ShopCartNoItems from "@/components/shopCart-page/ShopCartNoItems/ShopCartNoItems";

const page = () => {

	const shopCartData = useAppSelector(state => state.shopCart.data);

	//check items in shop cart
	if (!shopCartData.length) return <ShopCartNoItems />;

	return (
		<Container className={styles.shopCart}>
			<header className={styles.topLinks}>
				<BackLink link={LINK_CATALOG} text={"В каталог"} />
				<ClearShopCartBtn />
			</header>
			<div className={styles.content}>
				<ProductsList shopCartData={shopCartData} />
				<TotalAmount shopCartData={shopCartData} />
			</div>
		</Container>
	);
};

export default page;
