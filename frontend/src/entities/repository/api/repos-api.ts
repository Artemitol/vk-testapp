import { baseApi } from "@shared/api"
import { repositoryDTOschema, RepositoryModel } from "../model/repository-model"

export const repositoryApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getRepositoriesList: create.query<
            RepositoryModel[],
            { _per_page: number; _page: number }
        >({
            query: (options = { _page: 1, _per_page: 10 }) => ({
                // TODO: remove this debug url
                url: "/items",
                params: {
                    _page: options._page,
                    _per_page: options._per_page,
                },
            }),
            transformResponse: (result) =>
                // TODO: remove this weird object
                repositoryDTOschema.array().parse(result.data),
        }),
    }),
})

export const { useGetRepositoriesListQuery } = repositoryApi
