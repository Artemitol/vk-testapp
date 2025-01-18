import { selectReposList } from "@entities/repository"
import { ItemsList } from "@widgets/items-list"
import { usableRepoMaper } from "@widgets/usable-repository"
import { UsableRepositoryModel } from "@widgets/usable-repository"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export function SandboxList() {
    const repositories = useSelector(selectReposList)

    if (repositories.length === 0) {
        return (
            <div>
                You are trying to reach sandbox mode without data from request,
                go to the <Link to='/repositories'>repositories list</Link>
                first
            </div>
        )
    }

    return (
        <ItemsList<UsableRepositoryModel>
            data={repositories}
            mapFunction={usableRepoMaper}
        />
    )
}
