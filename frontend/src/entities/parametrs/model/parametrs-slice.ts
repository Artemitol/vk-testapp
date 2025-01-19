import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ActionsBarState = {
    perPage: number
    query: string
}

const initialState: ActionsBarState = {
    perPage: 10,
    query: "javascript",
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
    },
    selectors: {
        selectPerPage: (state) => state.perPage,
        selectQuery: (state) => state.query,
    },
})

export const { selectPerPage, selectQuery } = parametersSlice.selectors
export const { changePerPage, changeQuery } = parametersSlice.actions
