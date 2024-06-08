'use client'
import React, {FormEvent, useState} from 'react';
import styles from "./page.module.css";
import {Button, FloatingLabel, Form, FormControl, Spinner} from "react-bootstrap";
import {handleRequest} from "@/functions/handleRequest";
import {REQUEST_METHODS} from "@/types/general";
import {API_ADMIN_AUTH} from "@/constants/api";
import {LINK_ADMIN, LINK_ERROR} from "@/constants/links";

import {auth} from "@/app/firebase/firebase";
import {signInWithEmailAndPassword} from "@firebase/auth";

const page = () => {
	const [key, setKey] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [validEmail, setValidEmail] = useState<boolean>(false)
	const [validPassword, setValidPassword] = useState<boolean>(false)
	const [validKey, setValidKey] = useState<boolean>(false)

	const [load, setLoad] = useState<boolean>(false);


	//send form
	const handleSend = (e:FormEvent) => {
		e.preventDefault();
		globalThis.localStorage.setItem('key', key);
		setLoad(true);
		const checkKey = handleRequest(REQUEST_METHODS.POST, API_ADMIN_AUTH, {})
			.then(res => {
				if (res.data === false) {
					globalThis.localStorage.removeItem('key');
					setValidKey(false)
					return false
				}
				return true
			})
			.catch(() => {
				globalThis.localStorage.removeItem('key');
				setValidKey(false)
				return false
			})
			.finally(() => {
				setLoad(false);
				setValidKey(true)
				return true
			})

		const checkAuth = signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				return user && (user.email === 'admin@mail.ru' || user.email === 'admin1@mail.ru');

			})
			.catch((error) => {
				setValidEmail(false)
				setValidPassword(false)
				return false
			})
			.finally(() => {
				return true
			})

		Promise.all([checkAuth, checkKey]).then(val => {
			if(!val[0]){
				setValidEmail(false)
				setValidPassword(false)
				setValidKey(false)
				alert('Неправильный логин или пароль')
				return
			}
			if(!val[1]){
				setValidEmail(false)
				setValidPassword(false)
				setValidKey(false)
				alert('Неправильный ключ')
				return
			}
			alert('Успешная авторизация')

			setValidEmail(true)
			setValidPassword(true)
			setValidKey(true)
			setEmail('');
			setPassword('');
			setKey('');

			globalThis.location.replace('/admin');
		})
	}


	return (
		<div className={styles.main}>
			<h1>Вход в Админ-панель</h1>
			<Form onSubmit={handleSend} >
				<FloatingLabel label={"Ключ"}>
					<FormControl
						required
						className={"w-100 mb-2"}
						value={key}
						onChange={e => setKey(e.target.value)}
						placeholder="Введите ключ"
						isValid={validKey}
						type={'text'}
					/>
				</FloatingLabel>
				<FloatingLabel label={"E-mail"}>
					<FormControl
						required
						className={"w-100 mb-2"}
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="Введите логин"
						isValid={validEmail}
						type={'email'}
					/>
				</FloatingLabel>
				<FloatingLabel label={"Пароль"}>
					<FormControl
						required
						className={"w-100 mb-2"}
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Введите пароль"
						isValid={validPassword}
						type={'password'}
					/>
				</FloatingLabel>

					<Button disabled={load} variant={"dark"} type={"submit"}>
						{load ? <Spinner size={"sm"} /> : "Далее"}
					</Button>
			</Form>
		</div>
	);
};

export default page;
