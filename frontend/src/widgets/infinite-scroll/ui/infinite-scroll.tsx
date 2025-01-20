import { Button } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

import { ItemsList } from "@widgets/items-list"
import {
    UsableRepositoryModel,
    usableRepoMaper,
} from "@widgets/usable-repository"

import { selectPerPage, selectQuery } from "@entities/parametrs"
import {
    addRepositories,
    clearRepositories,
    selectReposCount,
    selectReposList,
    useGetRepositoriesListQuery,
} from "@entities/repository"

import classes from "./infinite-scroll.module.css"

export function InfiniteScoll() {
    const dispatch = useDispatch()
    const perPage = useSelector(selectPerPage)
    const repositories = useSelector(selectReposList)
    const reposCount = useSelector(selectReposCount)
    const query = useSelector(selectQuery)
    const [page, setPage] = useState<number>(1)
    const {
        data = [],
        isFetching,
        isLoading,
        isError,
        isSuccess,
    } = useGetRepositoriesListQuery({
        per_page: perPage,
        page: page,
        q: query,
    })
    const currStatus = {
        isError,
        isFetching,
        isLoading,
        isSuccess,
    }

    useEffect(() => {
        return () => {
            dispatch(clearRepositories())
        }
    }, [])

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
                    // Checks that repos list not empty
                    disabled={reposCount === 0 ? true : false}
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
