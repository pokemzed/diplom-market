'use client'
import React from 'react';
import {Container} from "react-bootstrap";
import PhoneEmailLinks from "@/ui/PhoneEmailLinks/PhoneEmailLinks";
import styles from "./page.module.css";

const page = () => {
	return (
		<Container className={styles.main}>
			<PhoneEmailLinks />
		</Container>
	);
};

export default page;
