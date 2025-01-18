import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Repository, RepositoryModel } from "@entities/repository"
import { Dropdown, MenuProps } from "antd"
import { useDispatch } from "react-redux"
import { removeRepository } from "@entities/repository"
import { toast } from "sonner"

type UsableRepositoryProps = {
    data: RepositoryModel
}

export function UsableRepository({ data }: UsableRepositoryProps) {
    const dispatch = useDispatch()

    const items: MenuProps["items"] = [
        {
            label: "View details",
            icon: <EditOutlined />,
            key: 1,
        },
        {
            label: "Delete",
            icon: <DeleteOutlined />,
            key: 2,
            danger: true,
            onClick: () => {
                dispatch(removeRepository(Number(data.id)))
                toast.success("Deleted repository!")
            },
        },
    ]
    const menuProps = {
        items,
    }

    return (
        <Repository
            data={data}
            menu={<Dropdown.Button menu={menuProps}>Edit card</Dropdown.Button>}
        />
    )
}
