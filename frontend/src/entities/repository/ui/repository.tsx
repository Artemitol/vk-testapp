import { RepositoryModel } from "../model/repository-model"
import { Avatar, Card } from "antd"
const { Meta } = Card

type RepositoryProps = {
    data: RepositoryModel
}

export function Repository({ data }: RepositoryProps) {
    return (
        <Card size='small' hoverable title={data.name} extra={"Actions"}>
            <Meta
                avatar={<Avatar alt='user image' src={data.owner.avatar_url} />}
                title={`By: ${data.owner.login}`}
                description={data.description}
            />
        </Card>
    )
}
