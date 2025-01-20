import { useDispatch } from "react-redux"
import { toast } from "sonner"

import {
    SortDirection,
    SortField,
    sortRepositories,
} from "@entities/repository"

export const useSortRepositories = () => {
    const dispatch = useDispatch()

    const sortRepository = (direction: SortDirection, field: SortField) => {
        try {
            dispatch(
                sortRepositories({ direction: direction, sortField: field })
            )

            toast.info("Now data is not in original state")
        } catch {
            toast.error("Something when wrong... Cant sort...")
        }
    }

    return sortRepository
}
