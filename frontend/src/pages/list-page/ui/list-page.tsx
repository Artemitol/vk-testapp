import { InfiniteScoll } from "@widgets/infinite-scroll"
import classes from "./list-page.module.css"
import { Toaster } from "sonner"
import { ActionsBar } from "@widgets/actions-bar"

export function ListPage() {
    return (
        <section className={classes.listPage}>
            <h2 className={classes.heading}>
                View repositories, given by API (if you want to manipulate with
                data locally, go to other page)
            </h2>
            <div className={classes.content}>
                <ActionsBar />
                <InfiniteScoll />
                <Toaster
                    richColors
                    duration={3500}
                    theme='system'
                    closeButton
                />
            </div>
        </section>
    )
}
