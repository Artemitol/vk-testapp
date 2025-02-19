import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { RepositoryModel } from "./repository-model"

export type SortDirection = "asc" | "desc"
export type SortField = "id" | "name"
type SortedReposStateType = {
    reposList: RepositoryModel[]
    reposCount: number
    sortDirection: SortDirection
    sortField: SortField
}

const initialState: SortedReposStateType = {
    reposList: [],
    reposCount: 0,
    sortDirection: "asc",
    sortField: "name",
}

export const repositoriesSlice = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        addRepository: (state, action: PayloadAction<RepositoryModel>) => {
            state.reposList.push(action.payload)
            state.reposCount += 1
        },
        addRepositories: (state, action: PayloadAction<RepositoryModel[]>) => {
            state.reposList.push(...action.payload)
            state.reposCount += action.payload.length
        },
        removeRepository: (state, action: PayloadAction<number>) => {
            state.reposList = state.reposList.filter(
                (repo) => Number(repo.id) !== action.payload
            )
            state.reposCount -= 1
        },
        clearRepositories: (state) => {
            state.reposList = initialState.reposList
            state.reposCount = 0
        },
        setRepositories: (state, action: PayloadAction<RepositoryModel[]>) => {
            state.reposList = action.payload
            state.reposCount = action.payload.length
        },
        sortRepositories: (
            state,
            action: PayloadAction<{
                direction: SortDirection
                sortField: SortField
            }>
        ) => {
            state.sortDirection = action.payload.direction
            let comparison = 0

            state.reposList = state.reposList.sort((a, b) => {
                if (state.sortField === "name") {
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
        selectReposCount: (state) => state.reposCount,
    },
})

export const {
    addRepository,
    addRepositories,
    removeRepository,
    setRepositories,
    sortRepositories,
    clearRepositories,
} = repositoriesSlice.actions

export const {
    selectReposList,
    selectSortDirection,
    selectSortField,
    selectReposCount,
} = repositoriesSlice.selectors
