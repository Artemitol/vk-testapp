import { Main } from "@widgets/main"
import classes from "./layout.module.css"
import { Outlet } from "react-router-dom"
import { Header } from "@widgets/header"
import { NavbarConfiguration } from "../config/navbar-config"
import { Toaster } from "sonner"

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
