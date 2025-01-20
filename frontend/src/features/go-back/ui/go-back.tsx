import { RollbackOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"
import { useNavigate } from "react-router-dom"

type GoBackProps = {
    value: string
}

export function GoBack({ value }: GoBackProps) {
    const navigate = useNavigate()

    function clickHandler() {
        // Navigates user to the last visited route
        navigate(-1)
    }

    return (
        <Tooltip title='Navigating to the last visited url'>
            <Button
                onClick={clickHandler}
                type='primary'
                icon={<RollbackOutlined />}
                iconPosition='end'
            >
                {value}
            </Button>
        </Tooltip>
    )
}
