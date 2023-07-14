import React, {useState} from 'react';
import styles from "./VacancyItem.module.css";

const VacancyItem = () => {

	const [show, setShow] = useState<boolean>(false);

	return (
		<div className={styles.VacancyItem}>
			<div
				className={styles.title + ' ' + `${show ? styles.active : ''}`}
				onClick={() => setShow(prev => !prev)}
			>
				<h2>Повар заготовщик</h2>
				<img className={styles.arrow} src="/icons/red-arrow-right.svg" alt=">"/>
			</div>

			<div className={styles.info + ' ' + `${show ? styles.active : ''}`}>
				<div className={styles.inner}>
					<h3>Описание</h3>
					<h5>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
						ex ea commodo consequat.
					</h5>
				</div>

				<div className={styles.inner}>
					<h3>Дополнительно</h3>
					<h5>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
						ex ea commodo consequat.
					</h5>
				</div>

				<div className={styles.inner}>
					<h3>Заработная плата</h3>
					<h5>от 10 000₽</h5>
				</div>
			</div>
		</div>
	);
};

export default VacancyItem;
