import React from 'react';
import styles from "./FooterContent.module.css";
import Link from "next/link";
import {CONTACTS} from "@/constants/general";
import {LINK_PRIVACY, LINK_REQUISITES} from "@/constants/links";

const FooterContent = () => {
	return (
		<footer className={styles.FooterContent}>
			<div className={styles.top}>
				<h4>
					Свяжитесь с нами, <br />
					задайте интересующие <span>вопросы</span>
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

			<div className={styles.top}>
				<h4>
					По вопросам <br />
					<span>сотрудничества</span>
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
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.left}>
					<h6>
						ООО «Это Хлеб» © 2023 <br/>
						ИНН/КПП 5249043499/524901001
					</h6>
				</div>

				<div className={styles.right}>
					<Link href={LINK_REQUISITES}>Реквизиты и юр. информация</Link>
					<Link href={LINK_PRIVACY}>Политика конфиденциальности</Link>
				</div>
			</div>
		</footer>
	);
};

export default FooterContent;
