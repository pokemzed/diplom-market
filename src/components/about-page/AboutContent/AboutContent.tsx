import React from 'react';
import styles from "./AboutContent.module.css";
import {APP_TITLE} from "@/constants/general";

const AboutContent = () => {
	return (
		<div className={styles.AboutContent}>
			<p>
				Это Хлеб - это очень душевный проект двух очень неравнодушных людей. Неравнодушных к жизни,
				к окружающим, к здоровью, к тому, что едим мы и наши близкие. Им пришла идея открыть в
				Дзержинске хлебную лавку, в которой каждое утро можно купить ароматный, испеченный на
				рассвете ремесленный хлеб. А это значит, что от закваски до прилавка о каждой буханке
				и булочке заботятся человеческие руки. Продукты там подбираются с большим вниманием и заботой.
				<br/><br/>
				Это Хлеб - это союз немецкого и французского хлебопечения. Немецкого - потому что именно
				в Германии, в школе Вайнхайм, вспыхнула любовь между хлебом и шеф-пекарем проекта Татьяной
				Слизовой. Французского - так как ни одна пекарня не может устоять перед багетами и
				круассанами. А еще, как в Германии и Франции, в Это Хлеб варят очень вкусный кофе.
			</p>

			<div className={styles.images}>
				<img src={"/other/about1.png"} alt={APP_TITLE} />
				<img src={"/other/about2.png"} alt={APP_TITLE} />
			</div>

			<p>
				Имена обоих шефов, Каспаруса Бьюка и Джорджа Вагнера, занесены в знаменитые кулинарные
				книги и учебные пособия Канады. В 2001 году Центральное канадское телевидение объявило
				проект сотрудничества Каспаруса Бьюка с российскими предпринимателями из г. Дзержинск
				– лучшим, сделав сюжет о кафе «Каспарус».
				<br/><br/>
				Желая идти в ногу со временем, в 2015 году мы успешно реализовали новую популярную
				концепцию «семейное кафе-кондитерская». Проект получает название «Дон Батон».
				Вместе с новым кафе начинает работу и кулинарная студия «Дон Батон».
				Она становится совершенно уникальным пространством, в котором проводятся и кулинарные
				мастер-классы, и семейные праздники, детские и взрослые тимбилдинги и еще много всего.
				Уютная атмосфера студии наполняется ароматом кофе и вкуснейших десертов.
				Предприятие вновь завоевывает сердца гостей.
				<br/><br/>
				Это Хлеб - это что-то очень настоящее. Это Хлеб.
			</p>
		</div>
	);
};

export default AboutContent;
