import { useGetRepositoriesListQuery } from "@entities/repository"
import { repositoryMaper } from "@entities/repository"
import { ItemsList } from "@widgets/items-list"
import { useState } from "react"
import { Toaster } from "sonner"

const perPage = 10

export function ListPage() {
    const [params, setParams] = useState({ perPage, currentPage: "" })
    const {
        data = [],
        isFetching,
        isLoading,
        isError,
        isSuccess,
    } = useGetRepositoriesListQuery({
        params: {
            _per_page: params.perPage,
            _page: Number(params.currentPage),
        },
    })
    const currStatus = {
        isError,
        isFetching,
        isLoading,
        isSuccess,
    }

    return (
        <section>
            <input
                type='text'
                value={params.currentPage}
                onChange={(event) => {
                    setParams((prev) => ({
                        ...prev,
                        currentPage: event.target.value,
                    }))
                    // refetch()
                }}
            />
            <ItemsList
                data={data}
                mapFunction={repositoryMaper}
                perPage={perPage}
                status={currStatus}
            />
            <Toaster richColors duration={3500} theme='system' closeButton />
        </section>
    )
}
