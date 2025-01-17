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
                },
            }),
            transformResponse: (result) =>
                // TODO: remove this weird object
                repositoryDTOschema.array().parse(result.data),
        }),
    }),
})

export const { useGetRepositoriesListQuery } = repositoryApi
