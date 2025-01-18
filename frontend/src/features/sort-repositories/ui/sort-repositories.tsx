import { SortDirection, sortRepositories } from "@entities/repository"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import { toast } from "sonner"

type SortRepositoriesProps = {
    direction: SortDirection
}

export function SortRepositories({ direction }: SortRepositoriesProps) {
    const dispatch = useDispatch()

    function clickHandler() {
        try {
            dispatch(sortRepositories({ direction: direction }))

            toast.info("Now data is not in original state")
        } catch {
            toast.error("Something when wrong... Cant sort...")
        }
    }

    return <Button onClick={clickHandler}>Sort repositories</Button>
}
