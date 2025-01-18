import { RepositoryModel } from "../model/repository-model"
import { Avatar, Card } from "antd"
const { Meta } = Card

type RepositoryProps = {
    data: RepositoryModel
}

export function Repository({ data }: RepositoryProps) {
    return (
        <Card size='small' hoverable title={data.owner.login} extra={"Actions"}>
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
