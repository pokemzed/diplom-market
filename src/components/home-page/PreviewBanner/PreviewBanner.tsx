import React from 'react';
import styles from "./PreviewBanner.module.css";
import {Container} from "react-bootstrap";
import Link from "next/link";
import {LINK_CATALOG} from "@/constants/links";
import {APP_TITLE} from "@/constants/general";

const PreviewBanner = () => {
	return (
		<Container className={styles.PreviewBanner}>
			<div className={styles.content}>
				<h1>
					Идеальный <span>Вкусный</span> <br/>
					хлеб регулярно
				</h1>

				<p>
					Мы не просто печём хлеб, мы печём его с трепетом и
					любовью и только с хорошим настроением. Четкое соблюдение
					рецептур, только натуральные продукты и увлечённость своим
					ремеслом - гарантия качества нашего продукта.
				</p>

				<Link href={LINK_CATALOG}>
					Каталог хлеба
				</Link>
			</div>

			<img
				src={"/other/preview-bg.png"}
				alt={APP_TITLE}
			/>
		</Container>
	);
};

export default PreviewBanner;
