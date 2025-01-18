import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ActionsBarState = {
    startPage: number
    perPage: number
}

const initialState: ActionsBarState = {
    startPage: 1,
    perPage: 10,
}

export const actionsBarSlice = createSlice({
    name: "actions-bar",
    initialState: initialState,
    reducers: {
        changeStartPage: (state, action: PayloadAction<number>) => {
            state.startPage = action.payload
        },
        changePerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload
        },
    },
    selectors: {
        selectStartPage: (state) => state.startPage,
        selectPerPage: (state) => state.perPage,
    },
})

export const { selectPerPage, selectStartPage } = actionsBarSlice.selectors
export const { changePerPage, changeStartPage } = actionsBarSlice.actions
