import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {LINK_CATALOG, LINK_HOME} from "@/constants/links";
import styles from "./NavbarTop.module.css";
import ShopCartLink from "@/components/general/NavbarTop/components/ShopCartLink/ShopCartLink";

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

				<ShopCartLink />
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
