import { useDispatch } from "react-redux"
import { toast } from "sonner"

import { RepositoryModel, removeRepository } from "@entities/repository"

export const useDeleteRepository = () => {
    const deleteRepository = (id: RepositoryModel["id"]) => {
        const dispatch = useDispatch()

        try {
            dispatch(removeRepository(id))

            toast.success(`Deleted repository without troubles (id: ${id})`)
        } catch (err) {
            toast.error(`Error. Cant delete repository (id: ${id})`)
            console.error(err)
        }
    }

    return deleteRepository
}
