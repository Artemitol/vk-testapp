import {
    changePerPage,
    changeQuery,
    selectPerPage,
    selectQuery,
} from "@entities/parametrs"
import { clearRepositories, RequestParametrsModel } from "@entities/repository"
import { Tooltip, Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"

type ChangeRequestConfigProps = Partial<RequestParametrsModel> & {
    isDisabled?: boolean
    label: string
}

export function ChangeRequestConfig({
    per_page,
    q,
    label,
}: ChangeRequestConfigProps) {
    const dispatch = useDispatch()
    const perPage = useSelector(selectPerPage)
    const query = useSelector(selectQuery)

    // Prevents to trigger actions without changes (this will delete all repos from list)
    const isDisabled = perPage === per_page && query === q

    function clickHandler() {
        if (!per_page && !q) {
            toast.error("Trying to change config without new params")
        } else {
            // Clearing state of repos, because they aren`t actual (new params means new repos)
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

    return (
        <Tooltip title='Applyies new changes to the request config'>
            <Button type='primary' onClick={clickHandler} disabled={isDisabled}>
                {label}
            </Button>
        </Tooltip>
    )
}
