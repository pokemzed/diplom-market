import React from 'react';
import styles from "./NotFoundContent.module.css";
import BackLink from "@/ui/BackLink/BackLink";
import {LINK_CATALOG} from "@/constants/links";
import {Container} from "react-bootstrap";

const NotFoundContent = () => {
	return (
		<Container className={styles.NotFoundContent}>
			<div className={styles.goBack}>
				<BackLink link={LINK_CATALOG} text={"В каталог"} />
			</div>

			<div className={styles.content}>
				<img
					alt={"Not found"}
					src={"/other/not-found.svg"}
				/>
				<h5>Такой страницы не существует...</h5>
			</div>
		</Container>
	);
};

export default NotFoundContent;
