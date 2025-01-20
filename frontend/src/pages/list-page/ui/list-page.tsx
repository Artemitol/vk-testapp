import { Toaster } from "sonner"

import { ActionsBar } from "@widgets/actions-bar"
import { InfiniteScoll } from "@widgets/infinite-scroll"

import classes from "./list-page.module.css"

export function ListPage() {
    return (
        <section className={classes.listPage}>
            <h2 className={classes.heading}>
                On this page you can view a result of api request
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
