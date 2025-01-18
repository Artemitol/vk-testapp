import { RepositoryModel } from "@entities/repository"
import { ReactNode } from "react"
import { UsableRepository } from "../ui/usable-repository"

export const usableRepoMaper = (repos: RepositoryModel[]): ReactNode => {
    const data = repos.map((repo) => (
        <UsableRepository key={repo.id} data={repo} />
    ))

    return data
}
