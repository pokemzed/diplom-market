import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {LINK_CATALOG, LINK_HOME, LINK_SHOP_CART} from "@/constants/links";
import styles from "./NavbarTop.module.css";

const NavbarTop = () => {
	return (
		<Navbar className={styles.NavbarTop} bg="primary">
			<Container>
				<Link href={LINK_HOME} className={styles.logo}>
					<h3 className={"m-0"}>Logo</h3>
				</Link>

				<Nav className={styles.linksContainer}>
					<Link href={LINK_CATALOG}>Каталог</Link>
				</Nav>

				<Link href={LINK_SHOP_CART}>
					<Button variant={"success"}>
						Корзина
					</Button>
				</Link>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
