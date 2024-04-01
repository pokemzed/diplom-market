import React from 'react';
import styles from "./PreviewBanner.module.css";
import {Container} from "react-bootstrap";
import Link from "next/link";
import {LINK_CATALOG} from "@/constants/links";
import {APP_TITLE} from "@/constants/general";

const PreviewBanner = () => {
	return (
		<div className={styles.PreviewBannerContainer}>
			<Container className={styles.PreviewBanner}>
				<div className={styles.content}>
					<h1>Все для твоего дома</h1>

					<p>
						Мебель и товары для дома в интернет-магазине SOUDEMY.
						Быстрая доставка по Москве, Санкт-Петербургу и всей России.
						Широкий ассортимент, более 50 000 товаров.
					</p>

					<Link href={LINK_CATALOG}>
						Перейти в каталог
					</Link>
				</div>

				<img
					src={"/other/preview-bg.png"}
					alt={APP_TITLE}
				/>
			</Container>
		</div>
	);
};

export default PreviewBanner;
