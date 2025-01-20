import { RequestParametrsModel } from "@entities/repository"
import { Tooltip, Button } from "antd"
import { useChangeReqConfig } from "../lib/change-request-config"

type ChangeRequestConfigProps = Partial<RequestParametrsModel> & {
    isDisabled?: boolean
    label: string
}

export function ChangeRequestConfig({
    per_page,
    q,
    label,
}: ChangeRequestConfigProps) {
    const changeConfig = useChangeReqConfig()

    function clickHandler() {
        changeConfig(per_page, q)
    }

    return (
        <Tooltip title='Applyies new changes to the request config'>
            <Button type='primary' onClick={clickHandler}>
                {label}
            </Button>
        </Tooltip>
    )
}
