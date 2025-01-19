import { Button, InputNumber, Tooltip } from "antd"
import classes from "./action-bar.module.css"
import { PlusOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { clearRepositories, SortDirection } from "@entities/repository"
import { changePerPage, selectPerPage } from "@entities/parametrs"
import { SortRepositories } from "@features/sort-repositories"

type ActionsBarState = {
    pageNumber: number
    perPage: number
    sortDirection: SortDirection
}

export function ActionsBar() {
    // const {} = useGetRepositoriesListQuery({})
    const dispatch = useDispatch()
    const [local, setLocal] = useState<ActionsBarState>({
        perPage: useSelector(selectPerPage),
        pageNumber: 1,
        sortDirection: "asc",
    })

    return (
        <div className={classes.actionBar}>
            <div className={classes.config}>
                <div className={classes.sort}>
                    <SortRepositories direction='desc' label='Desc sort' />
                    <SortRepositories direction='asc' label='Asc sort' />
                </div>
                {/* <Dropdown /> */}
                <div className={classes.pageNumber}>
                    <Tooltip title='Change how many pages will be displayed per page'>
                        <div className={classes.formBlock}>
                            <label>Per page</label>
                            <InputNumber
                                placeholder='per page'
                                value={local.perPage.toString()}
                                onChange={(value) =>
                                    setLocal((prev) => ({
                                        ...prev,
                                        perPage: Number(value) || 0,
                                    }))
                                }
                            />
                        </div>
                    </Tooltip>
                    <Tooltip title='Applyies new changes to the request config'>
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
                {/* <Dropdown /> */}
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
