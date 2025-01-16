import { useGetRepositoriesListQuery } from "@entities/repository"
import { repositoryMaper } from "@entities/repository"
import { ItemsList } from "@widgets/items-list"
import { Toaster } from "sonner"

const perPage = 3

export function ListPage() {
    const {
        data = [],
        isFetching,
        isLoading,
        isError,
        isSuccess,
    } = useGetRepositoriesListQuery({
        params: { _per_page: perPage },
    })
    const currStatus = {
        isError,
        isFetching,
        isLoading,
        isSuccess,
    }

    return (
        <section>
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
