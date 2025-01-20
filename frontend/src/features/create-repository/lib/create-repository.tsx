import { useDispatch } from "react-redux"
import { toast } from "sonner"

import { RepositoryModel, addRepository } from "@entities/repository"

type CreateRepoStatus = "error" | "ok"

export const useCreateRepository = () => {
    const dispatch = useDispatch()

    const createRepository = (dataToCreate: RepositoryModel) => {
        let status: CreateRepoStatus

        try {
            dispatch(addRepository(dataToCreate))

            toast.success("Added new repository")
            status = "ok"
        } catch (err) {
            toast.error("Failed to create new repository")
            status = "error"
            throw err
        }

        return { status: status }
    }

    return createRepository
}
