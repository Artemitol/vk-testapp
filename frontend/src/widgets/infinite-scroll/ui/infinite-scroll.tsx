import { selectPerPage, selectStartPage } from "@entities/parametrs"
import classes from "./infinite-scroll.module.css"
import {
    useGetRepositoriesListQuery,
    addRepositories,
    selectReposList,
} from "@entities/repository"
import { ItemsList } from "@widgets/items-list"
import {
    usableRepoMaper,
    UsableRepositoryModel,
} from "@widgets/usable-repository"
import { Button } from "antd"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

export function InfiniteScoll() {
    const dispatch = useDispatch()
    const perPage = useSelector(selectPerPage)
    const startPage = useSelector(selectStartPage)
    const repositories = useSelector(selectReposList)
    const [page, setPage] = useState<number>(startPage)
    const {
        data = [],
        isFetching,
        isLoading,
        isError,
        isSuccess,
    } = useGetRepositoriesListQuery({
        per_page: perPage,
        page: page,
        q: "java",
    })
    const currStatus = {
        isError,
        isFetching,
        isLoading,
        isSuccess,
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Request finished successfully!")
            dispatch(addRepositories(data))
        } else if (isError) {
            toast.error("Request failed")
        }
    }, [data, isSuccess])

    return (
        <div className={classes.infiniteScollWrapper}>
            <ItemsList<UsableRepositoryModel>
                data={repositories}
                mapFunction={usableRepoMaper}
                status={currStatus}
            />
            <div className={classes.actions}>
                <Button
                    iconPosition='end'
                    loading={isLoading || isFetching}
                    type='primary'
                    onClick={() =>
                        // Inncrements current page
                        setPage((prev) => prev + 1)
                    }
                >
                    Load more repos
                </Button>
            </div>
        </div>
    )
}
