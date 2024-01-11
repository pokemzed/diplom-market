import React from 'react';
import styles from "./DeliveryInfo.module.css";

const DeliveryInfo = () => {
	return (
		<div className={styles.DeliveryInfo}>
			<div className={styles.block}>
				<div className={styles.circle} />
				<p>
					Прием заказов с доставкой курьером
					осуществляется <b>с 9:00 до 16:00</b>
				</p>
			</div>

			<div className={styles.block}>
				<div className={styles.circle} />
				<p>
					Заказы, оформленные в период <b>с 19:00 до 9:00</b>,
					будут обработаны на следующий день
				</p>
			</div>
			<div className={styles.block}>
				<div className={styles.circle} />
				<p>
					Наличие отметки <b>"Предзаказ"</b> говорит об отсутствии в данный
					момент этого товара на прилавке он-лайн магазина и
					возможности заказать хлеб на другую дату. Вы можете обсудить ближайшую дату
					выполнения заказа на этот товар по телефону с нашими менеджерами.
				</p>
			</div>
		</div>
	);
};

export default DeliveryInfo;
