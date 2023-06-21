'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {useFetch} from "@/hooks/useFetch";
import {API_PRODUCT_ID, API_PRODUCT_IMG} from "@/constants/api";
import {Container, Spinner} from "react-bootstrap";
import {LINK_CATALOG, LINK_ERROR} from "@/constants/links";
import { redirect } from 'next/navigation';
import {IProductId, IProductImg} from "@/types/products";
import SwiperPhoto from "@/components/product-page/SwiperPhoto/SwiperPhoto";
import ProductInfo from "@/components/product-page/ProductInfo/ProductInfo";
import styles from "./page.module.css";
import Link from "next/link";
import {REQUEST_METHODS} from "@/types/general";

const page = () => {

	const params = useParams();
	const {data, error, load} = useFetch<IProductId>(API_PRODUCT_ID(params._id), REQUEST_METHODS.GET, {}, false);
	const { data:images } = useFetch<IProductImg>(API_PRODUCT_IMG(params._id), REQUEST_METHODS.GET, {});

	if (load) return <Spinner />;
	if (error) redirect(LINK_ERROR);

	if (data) {
		return (
			<Container className={styles.main}>

				<Link className={styles.linkBack} href={LINK_CATALOG}>
					Каталог
				</Link>

				<div className={styles.productData}>
					<div className={styles.sliderContainer}>
						<SwiperPhoto images={images?.images} />
					</div>

					<div className={styles.dataContainer}>
						<ProductInfo data={data} />
					</div>
				</div>
			</Container>
		);
	}
};

export default page;
