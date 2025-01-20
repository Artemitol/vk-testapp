import { Link } from "react-router-dom"

import { NavBarConfiguration, Navbar } from "@widgets/navbar"

import { Logo } from "@shared/ui/icons"

import classes from "./header.module.css"

type HeaderProps = {
    navConfig: NavBarConfiguration
}

export function Header({ navConfig }: HeaderProps) {
    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Link to='/' className={classes.link}>
                    <Logo />
                </Link>
                <Navbar config={navConfig} />
            </div>
        </header>
    )
}
