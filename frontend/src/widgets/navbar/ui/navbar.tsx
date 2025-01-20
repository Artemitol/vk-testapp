import { Link } from "react-router-dom"

import { NavBarConfiguration } from "../model/navbar-model"

import classes from "./navbar.module.css"

export function Navbar({ config }: { config: NavBarConfiguration }) {
    let key = 1

    return (
        <nav>
            <ul className={classes.list}>
                {config.map((link) => (
                    <li className={classes.element} key={key++}>
                        <Link className={classes.link} to={link.path}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
