import { parametersSlice } from "@entities/parametrs"
import { repositoriesSlice } from "@entities/repository"
import { combineSlices } from "@reduxjs/toolkit"
import { baseApi } from "@shared/api"

export const rootReducer = combineSlices(
    repositoriesSlice,
    parametersSlice,
    baseApi
)
