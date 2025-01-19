import { PlusOutlined } from "@ant-design/icons"
import { addRepository, RepositoryModel } from "@entities/repository"
import { Button, Tooltip } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

type CreateRepositoryProps = {
    dataToCreate?: RepositoryModel
    label: string
}

export function CreateRepository({
    dataToCreate,
    label,
}: CreateRepositoryProps) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Indicates that repository is being added now
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    function clickHandler() {
        try {
            if (dataToCreate) {
                setIsProcessing(true)
                dispatch(addRepository(dataToCreate))
                setIsProcessing(false)

                toast.success("Added new repository")
            } else {
                navigate("/create-repository")
                toast.info("enter data, that you need, and press CREATE", {
                    duration: 6000,
                })
            }
        } catch {
            toast.error("Failed to create new repository")
        }
    }

    return (
        <Tooltip>
            <Button
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
