import React from 'react';
import styles from "./Advantages.module.css";

const Advantages = () => {
	return (
		<div className={styles.Advantages}>
			<div className={styles.block}>
				<h2>Немного про <b>Это Хлеб</b></h2>
				<ul>
					<li>Большой выбор ассортимента</li>
					<li>Свежая продукция высшего качества</li>
					<li>Быстрая доставка</li>
					<li>Вежливый персонал</li>
					<li>Качественные ингредиенты</li>
				</ul>
			</div>

			<div className={styles.block}>
				<h2>Рассказ о продукции, с примером из реальной жизни</h2>
				<p>
					<b>Это Хлеб</b> - это союз немецкого и французского хлебопечения. Немецкого - потому что именно в Германии,
					в школе Вайнхайм, вспыхнула любовь между хлебом и шеф-пекарем проекта Татьяной Слизовой.
					Французского - так как ни одна пекарня не может устоять перед багетами и круассанами.
					А еще, как в Германии и Франции, в <b>Это Хлеб</b> варят очень вкусный кофе.
					<br/> <br/>
					Мы всегда готовы поделиться с вами вкусом нашей выпечки, и поэтому ждем вас, в наших заведениях в
					городе <b>Дзержинск</b>.
				</p>
			</div>
		</div>
	);
};

export default Advantages;
