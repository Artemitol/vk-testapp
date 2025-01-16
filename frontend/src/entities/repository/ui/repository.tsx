import classes from "./repository.module.css"
import { RepositoryModel } from "../model/repository-model"

type RepositoryProps = {
    data: RepositoryModel
}

export function Repository({ data }: RepositoryProps) {
    return (
        <article className={classes.repositoryCard}>
            <h3>{data.name}</h3>
            <hr />
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
            </div>
        </article>
    )
}
