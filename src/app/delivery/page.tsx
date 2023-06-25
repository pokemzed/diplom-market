'use client'
import React from 'react';
import {Container} from "react-bootstrap";
import styles from "./page.module.css";
import DeliveryInfo from "@/components/delivery-page/DeliveryInfo/DeliveryInfo";
import PayInfo from "@/components/delivery-page/PayInfo/PayInfo";

const page = () => {
	return (
		<Container className={styles.main}>
			<h1 className={styles.title}>Доставка и оплата</h1>

			<DeliveryInfo />
			<PayInfo />
		</Container>
	);
};

export default page;
