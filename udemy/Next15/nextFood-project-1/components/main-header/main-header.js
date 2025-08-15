import React from 'react'
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import css from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={css.header}>
                <Link className={css.logo} href={'/'}>
                    <Image priority src={logoImg} alt="Plate of foods and drinks"/>
                    Next Food
                </Link>
                <nav className={css.nav}>
                    <ul>
                        <li>
                            <NavLink href={'/meals'}>
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={'/community'}>
                                Foodies community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default MainHeader
