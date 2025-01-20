import {
    selectReposCount,
    SortDirection,
    SortField,
} from "@entities/repository"
import { Button, Tooltip } from "antd"
import { useSelector } from "react-redux"
import { useSortRepositories } from "../lib/sort-repositories"

type SortRepositoriesProps = {
    direction: SortDirection
    label: string
    field: SortField
}

export function SortRepositories({
    direction,
    label,
    field,
}: SortRepositoriesProps) {
    const reposCount = useSelector(selectReposCount)
    const sortRepositories = useSortRepositories()

    function clickHandler() {
        sortRepositories(direction, field)
    }

    return (
        <Tooltip title={`Sorts all repos in ${direction} direction`}>
            <Button
                type='primary'
                onClick={clickHandler}
                // Checking that array of repos is not empty
                disabled={reposCount === 0 ? true : false}
            >
                {label}
            </Button>
        </Tooltip>
    )
}
