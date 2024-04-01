import React from 'react';
import styles from "./ContactsMap.module.css";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";


const ContactsMap = () => {

	const position = [55.755864, 37.617698];

	return (
		<YMaps>
			<Map
				defaultState={{
					center: position,
					zoom: 15,
				}}
				className={styles.ContactsMap}
			>
				<Placemark geometry={position} />
			</Map>
		</YMaps>
	);
};

export default ContactsMap;
