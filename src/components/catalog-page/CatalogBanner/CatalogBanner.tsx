import React from 'react';
import styles from "./CatalogBanner.module.css";

const CatalogBanner = () => {
	return (
		<div className={styles.CatalogBanner}>
			<div className={styles.content}>
				<h1>
					Вкусные завтраки по <br/>
					ВКУСНОЙ цене
				</h1>
				<h5>Начните свой день вместе с нашей выпечкой</h5>
			</div>

			<img src="/other/breakfast.png" alt="Это хлеб"/>
		</div>
	);
};

export default CatalogBanner;
