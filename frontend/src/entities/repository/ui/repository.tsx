import { Avatar, Card } from "antd"
import { ReactNode } from "react"

import { RepositoryModel } from "../model/repository-model"
const { Meta } = Card

type RepositoryProps = {
    data: RepositoryModel
    menu?: ReactNode
}

export function Repository({ data, menu }: RepositoryProps) {
    return (
        <Card size='small' hoverable title={data.owner.login} extra={menu}>
            <Meta
                avatar={
                    <Avatar src={data.owner.avatar_url} alt='user avatar' />
                }
                title={`Name: ${data.name}`}
                description={data.description}
            />
        </Card>
    )
}
