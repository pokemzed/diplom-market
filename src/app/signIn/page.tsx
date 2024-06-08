"use client"
import {Button, Container, FloatingLabel, Form, FormControl, Spinner} from "react-bootstrap";
import styles from "./page.module.css"
import React, {FormEvent, useState} from "react";
import Link from "next/link";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/app/firebase/firebase";

const page = () => {
    const [load, setLoad] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [validEmail, setValidEmail] = useState<boolean>(false)
    const [validPassword, setValidPassword] = useState<boolean>(false)

    const user = globalThis.localStorage.getItem("user")
    if(user){
        return globalThis.location.replace("/profile")
    }

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        setLoad(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                if(user){
                    setValidEmail(true)
                    setValidPassword(true)
                    alert('Вы успешно авторизовались')
                    globalThis.localStorage.setItem('user', JSON.stringify(user))
                    globalThis.location.replace('/profile')
                    return true
                }
                return false
            })
            .catch((error) => {
                console.log(error)
                setValidEmail(false)
                setValidPassword(false)
                alert(`Не удалось авторизоваться: ${error.message}`)
                return false
            })
            .finally(() => {
                setEmail('');
                setPassword('');
                setLoad(false)
                return true
            })
    }


    return (
        <Container className={styles.signIn}>
            <h1>Вход</h1>
            <Form onSubmit={handleLogin} className={styles.form}>
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
                    {load ? <Spinner size={"sm"}/> : "Войти"}
                </Button>
            </Form>
            <Link href={'/signUp'}>Зарегистрироваться</Link>
        </Container>
    )
}
export default page