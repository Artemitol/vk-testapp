import { ReactNode } from "react"
import classes from "./items-list.module.css"
import { Spin } from "antd"

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
        return (
            <div className={classes.emptyList}>
                <h2>No data was provided in list</h2>
            </div>
        )
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.itemsList}>{mapFunction(data)}</div>
            <div className={classes.statusIndicator}>
                {status.isFetching && <Spin size='large' />}
            </div>
        </div>
    )
}
