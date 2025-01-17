import classes from "./repository.module.css"
import { RepositoryModel } from "../model/repository-model"
import { Avatar, Card } from "antd"
const { Meta } = Card

type RepositoryProps = {
    data: RepositoryModel
}

export function Repository({ data }: RepositoryProps) {
    return (
        <Card hoverable>
            <Meta
                avatar={<Avatar src={data.owner.avatar_url} />}
                title={data.name}
                description={data.description}
            >
                {/* <h3>{data.name}</h3>
                <div>
                    <div>
                        <span>id: {data.id}</span>
                    </div>
                    <div>
                        <img
                            src={data.owner.avatar_url}
                            alt='repo owner url'
                            width=''
                            height=''
                            loading='lazy'
                        />
                    </div>
                </div> */}
            </Meta>
        </Card>
    )
}
