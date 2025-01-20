import { SortDirection, sortRepositories } from "@entities/repository"
import { useDispatch } from "react-redux"
import { toast } from "sonner"

export const useSortRepository = () => {
    const dispatch = useDispatch()

    const sortRepository = (direction: SortDirection) => {
        try {
            dispatch(sortRepositories({ direction: direction }))

            toast.info("Now data is not in original state")
        } catch {
            toast.error("Something when wrong... Cant sort...")
        }
    }

    return sortRepository
}
