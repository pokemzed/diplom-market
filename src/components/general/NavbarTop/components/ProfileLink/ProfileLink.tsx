'use client'
import React from "react";
import Link from "next/link";
import styles from "./ProfileLink.module.css";

const ProfileLink: React.FC = () => {
    const user = globalThis.localStorage.getItem("user")
    const href = user ? '/profile' : '/signIn'
    const buttonText = user ? 'Профиль' : 'Войти'
    return (
        <Link href={href} className={styles.ProfileLink}>
            {buttonText}
        </Link>
    )
}
export default ProfileLink