import { PlusOutlined } from "@ant-design/icons"
import { addRepository, RepositoryModel } from "@entities/repository"
import { Button, Tooltip } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"

type CreateRepositoryProps = {
    dataToCreate: RepositoryModel
    isDisabled?: boolean
    label: string
}

export function CreateRepository({
    dataToCreate,
    label,
    isDisabled = false,
}: CreateRepositoryProps) {
    const dispatch = useDispatch()
    // Indicates that repository is being added now
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    function clickHandler() {
        try {
            setIsProcessing(true)
            dispatch(addRepository(dataToCreate))
            setIsProcessing(false)

            toast.success("Added new repository")
        } catch {
            toast.error("Failed to create new repository")
        }
    }

    return (
        <Tooltip title='Creates locally new repository'>
            <Button
                disabled={isDisabled}
                loading={isProcessing}
                onClick={clickHandler}
                size='large'
                type='primary'
                icon={<PlusOutlined />}
                iconPosition='end'
            >
                {label}
            </Button>
        </Tooltip>
    )
}
