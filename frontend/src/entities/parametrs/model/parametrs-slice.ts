import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ActionsBarState = {
    startPage: number
    perPage: number
    query: string
}

const initialState: ActionsBarState = {
    startPage: 1,
    perPage: 10,
    query: "javascript",
}

export const parametersSlice = createSlice({
    name: "actions-bar",
    initialState: initialState,
    reducers: {
        changeStartPage: (state, action: PayloadAction<number>) => {
            state.startPage = action.payload
        },
        changePerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload
        },
        changeQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
    },
    selectors: {
        selectStartPage: (state) => state.startPage,
        selectPerPage: (state) => state.perPage,
        selectQuery: (state) => state.perPage,
    },
})

export const { selectPerPage, selectStartPage } = parametersSlice.selectors
export const { changePerPage, changeStartPage } = parametersSlice.actions
