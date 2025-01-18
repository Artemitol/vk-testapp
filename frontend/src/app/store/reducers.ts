import { repositoriesSlice } from "@entities/repository"
import { combineSlices } from "@reduxjs/toolkit"
import { baseApi } from "@shared/api"

export const rootReducer = combineSlices(repositoriesSlice, baseApi)
