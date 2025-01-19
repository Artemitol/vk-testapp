import { baseApi } from "@shared/api"
import {
    repositoryDTOschema,
    RepositoryModel,
    RequestParametrsModel,
    ResponceSchema,
} from "../model/repository-model"
import { githubToken } from "@shared/config"

export const repositoryApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getRepositoriesList: create.query<
            RepositoryModel[],
            RequestParametrsModel
        >({
            query: (options = { page: 1, per_page: 10, q: "javascript" }) => ({
                url: "/search/repositories",
                params: {
                    page: options.page,
                    per_page: options.per_page,
                    q: options.q,
                },
                headers: {
                    Authorization: githubToken,
                    Accept: "application/vnd.github+json",
                },
            }),
            transformResponse: (result: ResponceSchema) =>
                repositoryDTOschema.array().parse(result.items),
        }),
    }),
})

export const { useGetRepositoriesListQuery } = repositoryApi
