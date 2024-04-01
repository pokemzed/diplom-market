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
				Общество с ограниченной ответственностью «soudemy» <br/>
				ФИО: <b>Воробушков Михаил Евгеньевич</b> <br/>
				Почтовый адрес: <b>606666, Нижегородская область, г. Дзержинск</b> <br/>
				Почта: <b><a href="mailto:casparusnn@mail.ru">vorobushkov52@mail.ru</a></b> <br/>
				Номер телефона: <b><a href="tel:+79030425999">+7 999 999 99 99</a></b> <br/>
				Расчётный счёт: <b>40702810742160000000</b> <br/>
				Банк: <b>ВОЛГО-ВЯТСКИЙ БАНК ПАО СБЕРБАНК</b> <br/>
				ИНН: <b>000000000000</b> <br/>
				КПП: <b>0000000000</b> <br/>
				ОГРНИП: <b>203020305010205</b> <br/>
			</h5>
		</Container>
	);
};

export default page;
