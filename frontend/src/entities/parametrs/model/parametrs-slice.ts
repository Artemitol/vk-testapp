import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type SortDirection = "asc" | "desc"

type ActionsBarState = {
    perPage: number
    query: string
    sort: boolean
    direction: SortDirection
}

const initialState: ActionsBarState = {
    perPage: 10,
    query: "javascript",
    sort: false,
    direction: "asc",
}

export const parametersSlice = createSlice({
    name: "actions-bar",
    initialState: initialState,
    reducers: {
        changePerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload
        },
        changeQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        changeSort: (state, action: PayloadAction<boolean>) => {
            state.sort = action.payload
        },
        changeDirection: (state, action: PayloadAction<SortDirection>) => {
            state.direction = action.payload
        },
    },
    selectors: {
        selectPerPage: (state) => state.perPage,
        selectQuery: (state) => state.query,
        selectParamsDirection: (state) => state.direction,
        selectParamsSort: (state) => state.sort,
    },
})

export const {
    selectPerPage,
    selectQuery,
    selectParamsDirection,
    selectParamsSort,
} = parametersSlice.selectors
export const { changePerPage, changeQuery, changeDirection, changeSort } =
    parametersSlice.actions
