import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";
import {LINK_HOME, LIST_LINKS} from "@/constants/links";
import styles from "./NavbarTop.module.css";
import ShopCartLink from "@/components/general/NavbarTop/components/ShopCartLink/ShopCartLink";
import {usePathname} from "next/navigation";

const NavbarTop = () => {

	const path = usePathname();

	return (
		<Navbar className={styles.NavbarTop}>
			<Container className={styles.container}>
				<Link href={LINK_HOME} className={styles.logo}>
					<img src={"./Logo.svg"} alt={"Это хлеб"} />
				</Link>

				<div className={styles.right}>
					<Nav className={styles.linksContainer}>
						{
							LIST_LINKS.map(elem => (
								<Link
									key={elem.title}
									href={elem.link}
									className={path === elem.link ? styles.active : ""}
								>
									{elem.title}
								</Link>
							))
						}
					</Nav>

					<ShopCartLink />
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
