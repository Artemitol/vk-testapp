import { baseApi } from "@shared/api"
import { repositoryDTOschema, RepositoryModel } from "../model/repository-model"

export const repositoryApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getRepositoriesList: create.query<
            RepositoryModel[],
            { params: Record<string, unknown> }
        >({
            query: (options) => ({
                // TODO: remove this debug url
                url: "/items",
                params: {
                    ...options.params,
                    _page: 1,
                },
            }),
            transformResponse: (result) =>
                repositoryDTOschema.array().parse(result.data),
            keepUnusedDataFor: 300, // 5 min before invalidation
        }),
    }),
})

export const { useGetRepositoriesListQuery } = repositoryApi
