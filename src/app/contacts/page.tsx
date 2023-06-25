'use client'
import React from 'react';
import {Container} from "react-bootstrap";
import PhoneEmailLinks from "@/ui/PhoneEmailLinks/PhoneEmailLinks";
import styles from "./page.module.css";
import PhotoGallery from "@/components/contacts-page/PhotoGallery/PhotoGallery";

const page = () => {
	return (
		<Container className={styles.main}>
			<PhoneEmailLinks />
			<PhotoGallery />
		</Container>
	);
};

export default page;
