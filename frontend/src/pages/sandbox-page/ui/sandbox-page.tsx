import { SandboxList } from "@widgets/sandbox-list"
import classes from "./sandbox-page.module.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { clearRepositories } from "@entities/repository"

export function SandboxPage() {
    const dispatch = useDispatch()

    // Will execute on page leave
    useEffect(() => {
        return () => {
            dispatch(clearRepositories())
        }
    }, [])

    return (
        <section className={classes.sandboxPage}>
            <SandboxList />
        </section>
    )
}
