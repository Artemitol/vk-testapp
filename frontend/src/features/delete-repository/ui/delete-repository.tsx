import { DeleteOutlined } from "@ant-design/icons"
import { RepositoryModel } from "@entities/repository"
import { Button } from "antd"
import { useDeleteRepository } from "../lib/delete-repository"

type DeleteRepositoryProps = {
    id: RepositoryModel["id"]
}

export function DeleteRepository({ id }: DeleteRepositoryProps) {
    const deleteRepository = useDeleteRepository()

    function clickHandler() {
        deleteRepository(id)
    }

    return (
        <>
            <Button
                color='danger'
                iconPosition='start'
                icon={<DeleteOutlined onClick={clickHandler} />}
            >
                Delete
            </Button>
        </>
    )
}
