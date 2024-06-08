"use client"
import React, {FormEvent, useState} from "react";
import {auth} from "@/app/firebase/firebase";
import {Button, Container, FloatingLabel, Form, FormControl, Spinner} from "react-bootstrap";
import styles from "./page.module.css";
import Link from "next/link";
import {createUserWithEmailAndPassword} from "@firebase/auth";

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
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                if(user){
                    alert("Вы успешно зарегистрировались")
                    globalThis.location.replace('/signIn')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                alert(`Не удалось зарегистрироваться: ${errorMessage}`)
            })
            .finally(() => {
                setEmail('');
                setPassword('');
                setLoad(false)
                return true
            })
    }


    return (
        <Container className={styles.signUp}>
            <h1>Регистрация</h1>
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
                    {load ? <Spinner size={"sm"}/> : "Зарегистрироваться"}
                </Button>
            </Form>
            <Link href={'/signIn'}>Войти</Link>
        </Container>
    )
}
export default page