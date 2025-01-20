import { selectReposCount, SortDirection } from "@entities/repository"
import { Button, Tooltip } from "antd"
import { useSelector } from "react-redux"
import { useSortRepository } from "../lib/sort-repositories"

type SortRepositoriesProps = {
    direction: SortDirection
    label: string
}

export function SortRepositories({ direction, label }: SortRepositoriesProps) {
    const reposCount = useSelector(selectReposCount)
    const sortRepositories = useSortRepository()

    function clickHandler() {
        sortRepositories(direction)
    }

    return (
        <Tooltip title={`Sorts all repos in ${direction} direction`}>
            <Button
                onClick={clickHandler}
                // Checking that array of repos is not empty
                disabled={reposCount === 0 ? true : false}
            >
                {label}
            </Button>
        </Tooltip>
    )
}
