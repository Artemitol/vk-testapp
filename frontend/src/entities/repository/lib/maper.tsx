import { ReactNode } from "react"
import { RepositoryModel } from "../model/repository-model"
import { Repository } from "../ui/repository"

// Converts model into react component
export const repositoryMaper = (repositories: RepositoryModel[]): ReactNode => {
    const data = repositories.map((repository) => (
        <Repository key={repository.id} data={repository} />
    ))

    return data
}
