import { DeleteOutlined } from "@ant-design/icons"
import { removeRepository, RepositoryModel } from "@entities/repository"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import { toast, Toaster } from "sonner"
import { z } from "zod"

type DeleteRepositoryProps = {
    id: RepositoryModel["id"]
}

export function DeleteRepository({ id }: DeleteRepositoryProps) {
    const dispatch = useDispatch()

    function clickHandler() {
        try {
            // Validates that id is number
            const parsedId = z.number().parse(id)

            dispatch(removeRepository(parsedId))

            toast.success(`Deleted repository without troubles (id: ${id})`)
        } catch (err) {
            toast.error(`Error. Cant delete repository (id: ${id})`)
            console.error(err)
        }
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
            <Toaster duration={3500} closeButton richColors />
        </>
    )
}
