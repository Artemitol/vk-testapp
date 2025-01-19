import { Input, InputNumber, Tooltip } from "antd"
import classes from "./action-bar.module.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import { selectPerPage, selectQuery } from "@entities/parametrs"
import { SortRepositories } from "@features/sort-repositories"
import { ChangeRequestConfig } from "@features/change-request-config"
import { CreateRepository } from "@features/create-repository"

type ActionsBarState = {
    perPage: number
    query: string
}

export function ActionsBar() {
    // Contains all values from local inputs
    const [local, setLocal] = useState<ActionsBarState>({
        perPage: useSelector(selectPerPage),
        query: useSelector(selectQuery),
    })

    return (
        <div className={classes.actionBar}>
            <div className={classes.config}>
                <div className={classes.sort}>
                    <SortRepositories direction='desc' label='Desc sort' />
                    <SortRepositories direction='asc' label='Asc sort' />
                </div>
            </div>
            <div className={classes.mainActions}>
                <div className={classes.searchBlock}>
                    <div className={classes.perPage}>
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
                <CreateRepository label='Create repository' />
            </div>
        </div>
    )
}
