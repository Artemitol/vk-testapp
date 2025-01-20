import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

import { Header } from "@widgets/header"
import { Main } from "@widgets/main"

import { NavbarConfiguration } from "../config/navbar-config"

import classes from "./layout.module.css"

export function Layout() {
    return (
        <div className={classes.appContainer}>
            <div className={classes.background} />
            <div className={classes.page}>
                <Header navConfig={NavbarConfiguration} />
                <Main>
                    <Outlet />
                    <Toaster
                        duration={1500}
                        richColors
                        closeButton
                        theme='system'
                    />
                </Main>
            </div>
        </div>
    )
}
