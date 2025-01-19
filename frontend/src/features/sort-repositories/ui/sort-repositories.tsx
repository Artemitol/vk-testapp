import {
    selectReposCount,
    SortDirection,
    sortRepositories,
} from "@entities/repository"
import { Button, Tooltip } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

type SortRepositoriesProps = {
    direction: SortDirection
    label: string
}

export function SortRepositories({ direction, label }: SortRepositoriesProps) {
    const dispatch = useDispatch()
    const reposCount = useSelector(selectReposCount)

    function clickHandler() {
        try {
            dispatch(sortRepositories({ direction: direction }))

            toast.info("Now data is not in original state")
        } catch {
            toast.error("Something when wrong... Cant sort...")
        }
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
