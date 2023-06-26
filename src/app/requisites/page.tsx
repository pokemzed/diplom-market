'use client'
import React from 'react';
import styles from "./page.module.css";
import {Container} from "react-bootstrap";

const page = () => {
	return (
		<Container className={styles.main}>
			<h1 className={styles.title}>
				ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ И РЕКВИЗИТЫ
			</h1>

			<h5 className={styles.info}>
				Общество с ограниченной ответственностью «Предприятие ПАБ» <br/>
				Расчётный счёт: <b>40702810742160001592</b> <br/>
				ИНН: <b>5249043499</b> <br/>
				КПП: <b>524901001</b> <br/>
				Банк: <b>ВОЛГО-ВЯТСКИЙ БАНК ПАО СБЕРБАНК</b> <br/>
				БИК: <b>042202603</b> <br/>
				Кор. счёт: <b>30101810900000000603</b> <br/>
			</h5>
		</Container>
	);
};

export default page;
