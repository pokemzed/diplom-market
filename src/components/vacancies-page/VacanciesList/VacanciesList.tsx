import React from 'react';
import styles from "./VacanciesList.module.css";
import {Container} from "react-bootstrap";
import VacancyItem from "@/components/vacancies-page/VacanciesList/components/VacancyItem/VacancyItem";

const VacanciesList = () => {
	return (
		<Container className={styles.VacanciesList}>
			<h1 className={styles.title}>Вакансии</h1>

			<div className={styles.content}>
				<VacancyItem />
				<VacancyItem />
				<VacancyItem />
				<VacancyItem />
				<VacancyItem />
				<VacancyItem />
				<VacancyItem />
			</div>
		</Container>
	);
};

export default VacanciesList;
