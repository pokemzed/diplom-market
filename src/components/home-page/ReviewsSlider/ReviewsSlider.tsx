import React from 'react';
import styles from "./ReviewsSlider.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";
import {ReviewsSliderData} from "@/components/home-page/ReviewsSlider/ReviewsSliderData";
import {APP_TITLE} from "@/constants/general";

const ReviewsSlider = () => {
	return (
		<div className={styles.ReviewsSlider}>
			<header>
				<h2>Отзывы клиентов</h2>
			</header>

			<Swiper
				slidesPerView={3}
				spaceBetween={20}
				pagination={{clickable: true}}
				modules={[Pagination]}
				className={styles.slider}
			>
				{
					ReviewsSliderData.map(elem => (
						<SwiperSlide key={elem.date} className={styles.slide}>
							<header>
								<h5>{elem.name}</h5>
								<p>{elem.date}</p>
							</header>

							<div className={styles.stars}>
								<p>{elem.stars}</p>
								<img src="/icons/star-primary.svg" alt={APP_TITLE}/>
							</div>

							<p className={styles.text}>{elem.comment}</p>
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
};

export default ReviewsSlider;
