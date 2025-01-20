import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

import {
    changePerPage,
    changeQuery,
    selectPerPage,
    selectQuery,
} from "@entities/parametrs"
import { clearRepositories } from "@entities/repository"

export const useChangeReqConfig = () => {
    const perPage = useSelector(selectPerPage)
    const query = useSelector(selectQuery)
    const dispatch = useDispatch()

    const changeConfig = (
        per_page: number | undefined,
        q: string | undefined
    ) => {
        if (!per_page && !q) {
            toast.error("Trying to change config without new params")
        } else if (perPage === per_page && query === q) {
            toast.info("You are trying to change config without NEW values")
        } else {
            // Clearing state of repos
            // because they aren`t actual (new params means new request)
            dispatch(clearRepositories())

            if (per_page) {
                dispatch(changePerPage(per_page))
            }

            if (q) {
                dispatch(changeQuery(q))
            }

            toast.info("Updated request config")
        }
    }

    return changeConfig
}
