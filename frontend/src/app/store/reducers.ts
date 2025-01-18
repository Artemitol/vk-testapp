import { repositoriesSlice } from "@entities/repository"
import { combineSlices } from "@reduxjs/toolkit"
import { baseApi } from "@shared/api"
import { actionsBarSlice } from "@widgets/actions-bar"

export const rootReducer = combineSlices(
    repositoriesSlice,
    actionsBarSlice,
    baseApi
)
