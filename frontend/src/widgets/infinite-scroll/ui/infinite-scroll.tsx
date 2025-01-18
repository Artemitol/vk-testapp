import classes from "./infinite-scroll.module.css"
import {
    RepositoryModel,
    useGetRepositoriesListQuery,
    repositoryMaper,
} from "@entities/repository"
import { ItemsList } from "@widgets/items-list"
import { Button } from "antd"
import { useState, useEffect } from "react"
import { Toaster } from "sonner"

const perPage = 10

export function InfiniteScoll() {
    const [params, setParams] = useState({ perPage, currentPage: "1" })
    const [displayedData, setDisplayedData] = useState<RepositoryModel[]>([])

    const {
        data = [],
        isFetching,
        isLoading,
        isError,
        isSuccess,
    } = useGetRepositoriesListQuery({
        _per_page: params.perPage,
        _page: Number(params.currentPage),
    })
    const currStatus = {
        isError,
        isFetching,
        isLoading,
        isSuccess,
    }

    useEffect(() => {
        if (isSuccess) {
            setDisplayedData((prev) => [...prev, ...data])
        }
    }, [data, isSuccess])

    return (
        <div className={classes.infiniteScollWrapper}>
            <ItemsList
                data={displayedData}
                mapFunction={repositoryMaper}
                perPage={perPage}
                status={currStatus}
            />
            <div className={classes.actions}>
                <Button
                    type='primary'
                    onClick={() =>
                        // Inncrements current page
                        setParams((prev) => ({
                            ...prev,
                            currentPage: String(Number(prev.currentPage) + 1),
                        }))
                    }
                >
                    Load more repos
                </Button>
            </div>
            <Toaster richColors duration={3500} theme='system' closeButton />
        </div>
    )
}
