import { Button, Input, InputNumber, Select, Tooltip } from "antd"
import classes from "./action-bar.module.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import { selectPerPage, selectQuery } from "@entities/parametrs"
import { SortRepositories } from "@features/sort-repositories"
import { ChangeRequestConfig } from "@features/change-request-config"
import { PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { selectSortField, SortField } from "@entities/repository"

type ActionsBarState = {
    perPage: number
    query: string
    repositoriesSortField: SortField
}

export function ActionsBar() {
    const navigate = useNavigate()
    // Contains all values from local inputs
    const [local, setLocal] = useState<ActionsBarState>({
        perPage: useSelector(selectPerPage),
        query: useSelector(selectQuery),
        repositoriesSortField: useSelector(selectSortField),
    })

    return (
        <div className={classes.actionBar}>
            <div className={classes.config}>
                <div className={classes.sort}>
                    <Tooltip title='Select sort field'>
                        <Select
                            onChange={(value) => {
                                setLocal((prev) => ({
                                    ...prev,
                                    repositoriesSortField: value,
                                }))
                            }}
                            value={local.repositoriesSortField}
                        >
                            <Select.Option selected value='name'>
                                Name
                            </Select.Option>
                            <Select.Option value='id'>Id</Select.Option>
                        </Select>
                    </Tooltip>
                    <SortRepositories
                        direction='desc'
                        label='Desc sort'
                        field={local.repositoriesSortField}
                    />
                    <SortRepositories
                        direction='asc'
                        label='Asc sort'
                        field={local.repositoriesSortField}
                    />
                </div>
            </div>
            <div className={classes.mainActions}>
                <div className={classes.searchBlock}>
                    <div className={classes.perPage}>
                        <Tooltip title='Change how many pages will be displayed per page'>
                            <div className={classes.formBlock}>
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
                    </div>
                    <Input
                        value={local.query}
                        onChange={(value) => {
                            setLocal((prev) => ({
                                ...prev,
                                query: value.target.value,
                            }))
                        }}
                    />
                    <ChangeRequestConfig
                        label='Search'
                        per_page={local.perPage}
                        q={local.query}
                    />
                </div>
                <Button
                    onClick={() => {
                        navigate("/create-repository")
                    }}
                    size='large'
                    type='primary'
                    icon={<PlusOutlined />}
                    iconPosition='end'
                >
                    Create repository
                </Button>
            </div>
        </div>
    )
}
