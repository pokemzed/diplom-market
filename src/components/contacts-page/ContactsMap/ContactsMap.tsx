import React from 'react';
import styles from "./ContactsMap.module.css";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";


const ContactsMap = () => {

	const position:LatLngExpression = [56.228, 43.399];

	return (
		<MapContainer
			className={styles.ContactsMap}
			center={position}
			zoom={14}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					ТЦ Меркурий <br />
					г.Дзержинск
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default ContactsMap;
