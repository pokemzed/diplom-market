"use client"
import {Button, Container, Spinner} from "react-bootstrap";
import styles from "./page.module.css"
import React from "react";

const page = () => {
    const user = globalThis.localStorage.getItem("user")
    // const user = JSON.parse(globalThis.localStorage.getItem("user") || "")
    if(!user){
        alert("Необходимо авторизоваться")
        return globalThis.location.replace("/signIn")
    }

    const handleLogout = () => {
        globalThis.localStorage.removeItem("user")
        globalThis.location.replace("/signIn")
    }

    return (
        <Container className={styles.profile}>
            <h1>Профиль. Добро пожаловать!</h1>
            <div className={styles.info}>
                <span>E-mail</span>
                <h2>{JSON.parse(user).email}</h2>
            </div>
            <Button variant={"danger"} type={"button"} onClick={handleLogout}>
                Выйти из аккаунта
            </Button>
        </Container>
    )
}
export default page