import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RepositoryModel } from "./repository-model"

type SortDirection = "asc" | "desc"
type SortField = "id" | "name"
type SortedReposStateType = {
    reposList: RepositoryModel[]
    sortDirection: SortDirection
    sortField: SortField
}

const initialState: SortedReposStateType = {
    reposList: [],
    sortDirection: "asc",
    sortField: "id",
}

export const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        // Add new repository
        addRepository: (state, action: PayloadAction<RepositoryModel>) => {
            state.reposList.push(action.payload)
        },

        // Delete repository by id
        removeRepository: (state, action: PayloadAction<number>) => {
            state.reposList = state.reposList.filter(
                (repo) => Number(repo.id) !== action.payload
            )
        },

        // Replace all data
        setRepositories: (state, action: PayloadAction<RepositoryModel[]>) => {
            state.reposList = action.payload
        },

        // Sort repositories by given example
        sortRepositories: (
            state,
            action: PayloadAction<{
                field: SortField
                direction: SortDirection
            }>
        ) => {
            state.sortField = action.payload.field
            state.sortDirection = action.payload.direction
            let comparison = 0

            state.reposList = state.reposList.sort((a, b) => {
                if (action.payload.field === "name") {
                    comparison = a.owner.login.localeCompare(b.name)
                } else {
                    comparison = Number(a.id) - Number(b.id)
                }

                return state.sortDirection === "asc" ? comparison : -comparison
            })
        },
    },
    selectors: {
        selectReposList: (state) => state.reposList,
        selectSortField: (state) => state.sortField,
        selectSortDirection: (state) => state.sortDirection,
    },
})

export const {
    addRepository,
    removeRepository,
    setRepositories,
    sortRepositories,
} = repositoriesSlice.actions

export const { selectReposList, selectSortDirection, selectSortField } =
    repositoriesSlice.selectors
