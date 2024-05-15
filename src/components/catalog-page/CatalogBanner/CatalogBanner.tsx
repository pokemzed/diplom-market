import React from 'react';
import styles from "./CatalogBanner.module.css";
import {APP_TITLE} from "@/constants/general";

const CatalogBanner = () => {
	return (
		<div className={styles.CatalogBanner}>
			<div className={styles.content}>
				<h1>
					Сделайте утро еще <br/>
					добрее с нашими диванами
				</h1>
				<h5>Начните свой день вместе с нашими диванами</h5>
			</div>

			<img src="/other/banner-slider.png" alt={APP_TITLE} />
		</div>
	);
};

export default CatalogBanner;
