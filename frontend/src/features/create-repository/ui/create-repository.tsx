import { PlusOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"

import { RepositoryModel } from "@entities/repository"

import { useCreateRepository } from "../lib/create-repository"

type CreateRepositoryProps = {
    dataToCreate: RepositoryModel
    isDisabled?: boolean
    label: string
    isInForm?: boolean
}

export function CreateRepository({
    dataToCreate,
    label,
    isDisabled = false,
    isInForm = false,
}: CreateRepositoryProps) {
    const createRepo = useCreateRepository()

    function clickHandler() {
        createRepo(dataToCreate)
    }

    return (
        <Tooltip title='Creates locally new repository'>
            {isInForm ? (
                <Button
                    htmlType='submit'
                    disabled={isDisabled}
                    onClick={clickHandler}
                    size='large'
                    type='primary'
                    icon={<PlusOutlined />}
                    iconPosition='end'
                >
                    {label}
                </Button>
            ) : (
                <Button
                    disabled={isDisabled}
                    onClick={clickHandler}
                    size='large'
                    type='primary'
                    icon={<PlusOutlined />}
                    iconPosition='end'
                >
                    {label}
                </Button>
            )}
        </Tooltip>
    )
}
