import { ReactNode } from "react"
import classes from "./items-list.module.css"
import { toast } from "sonner"

type ItemsListProps<T> = {
    perPage: number
    data: T[]
    mapFunction: (elements: T[]) => ReactNode
    status: {
        isLoading: boolean // Loading data (for first time)
        isFetching: boolean // Loading new data
        isError: boolean // Request finished with error
        isSuccess: boolean // Indicates that all went good
    }
}

export function ItemsList<T>({ data, mapFunction, status }: ItemsListProps<T>) {
    if (data.length === 0 && status.isSuccess) {
        console.log("no data")
        toast.info("No data was provided in response")

        return (
            <div className={classes.emptyList}>
                <h2>No data was provided in request</h2>
            </div>
        )
    }

    if (status.isError) {
        toast.error("Request failed, check network panel")
        console.log("error")

        return (
            <div className={classes.emptyList}>
                <h2 className={classes.errorMessage}>
                    Error acquired while making request
                </h2>
            </div>
        )
    }

    if (status.isLoading || status.isFetching) {
        return (
            <div className={classes.emptyList}>
                <h3>Loading...</h3>
            </div>
        )
    }

    if (status.isSuccess) {
        toast.success("Successfully parsed repositories!")
    }

    return <div className={classes.itemsList}>{mapFunction(data)}</div>
}
