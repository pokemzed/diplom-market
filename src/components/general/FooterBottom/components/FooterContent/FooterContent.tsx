import React from 'react';
import styles from "./FooterContent.module.css";
import Link from "next/link";
import {CONTACTS} from "@/constants/general";

const FooterContent = () => {
	return (
		<footer className={styles.FooterContent}>
			<div className={styles.top}>
				<h4>
					Свяжитесь с нами, <br />
					задайте интересующие вопросы
				</h4>
				<div className={styles.right}>
					<div className={styles.block}>
						<p>По телефону</p>
						<div className={styles.links}>
							<a href={`tel:${CONTACTS.phone.value}`}>
								{CONTACTS.phone.title}
							</a>
						</div>
					</div>

					<div className={styles.block}>
						<p>В мессенджерах</p>
						<div className={styles.links}>
							<a href={"/"} target={"_blank"} rel={"noreferrer"}>WhatsApp</a>
							<span>|</span>
							<a href={"/"} target={"_blank"} rel={"noreferrer"}>Telegram</a>
						</div>
					</div>

					<div className={styles.block}>
						<p>В соцсетях</p>
						<div className={styles.links}>
							<a href={"/"} target={"_blank"} rel={"noreferrer"}>Вконтакте</a>
							<span>|</span>
							<a href={"/"} target={"_blank"} rel={"noreferrer"}>Instargram</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.left}>
					<h6>
						ООО «Хлеб» © 2023 <br/>
						ОГРН 9999999999999, ИНН/КПП 9999999999/999999999
					</h6>
				</div>

				<div className={styles.right}>
					<Link href={"/"}>Политика конфиденциальности</Link>
					<Link href={"/"}>Пользовательское соглашение</Link>
				</div>
			</div>
		</footer>
	);
};

export default FooterContent;
