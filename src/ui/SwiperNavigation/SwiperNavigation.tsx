import React from 'react';
import styles from "./SwiperNavigation.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";


interface ISwiperNavigation {
	images: string[],
}

const SwiperNavigation: React.FC<ISwiperNavigation> = ({ images }) => {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation]}
			className={styles.SwiperNavigation}
		>
			{
				images.map((elem,index) => (
					<SwiperSlide key={index}>
						<img className={styles.image} src={elem} alt={"image"} />
					</SwiperSlide>
				))
			}
		</Swiper>
	);
};

export default SwiperNavigation;
