import { Button, Dropdown, InputNumber, Tooltip } from "antd"
import classes from "./action-bar.module.css"
import { PlusOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { changePerPage, selectPerPage } from "../model/actions-bar-slice"
import { useState } from "react"
import { clearRepositories } from "@entities/repository"

type ActionsBarState = {
    pageNumber: number
    perPage: number
}

export function ActionsBar() {
    // const {} = useGetRepositoriesListQuery({})
    const dispatch = useDispatch()
    const [local, setLocal] = useState<ActionsBarState>({
        perPage: useSelector(selectPerPage),
        pageNumber: 1,
    })

    return (
        <div className={classes.actionBar}>
            <div className={classes.config}>
                <Dropdown />
                <div className={classes.pageNumber}>
                    <InputNumber
                        placeholder='page'
                        value={local.perPage.toString()}
                        onChange={(value) =>
                            setLocal((prev) => ({
                                ...prev,
                                perPage: Number(value) || 0,
                            }))
                        }
                    />
                    <Tooltip title='Applyies new changes to the requests config'>
                        <Button
                            type='default'
                            onClick={() => {
                                dispatch(changePerPage(local.perPage))
                                dispatch(clearRepositories())
                            }}
                        >
                            Apply changes
                        </Button>
                    </Tooltip>
                </div>
                <Dropdown />
            </div>
            <Button
                size='large'
                type='primary'
                icon={<PlusOutlined />}
                iconPosition='end'
            >
                Create new repository
            </Button>
        </div>
    )
}
