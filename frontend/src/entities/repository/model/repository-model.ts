import { z } from "zod"

export const repositoryDTOschema = z.object({
    id: z.number().default(0),
    node_id: z.string().default("0"),
    name: z.string().default("untitled"),
    full_name: z.string().default("unknown"),
    private: z.boolean().default(false),
    owner: z
        .object({
            login: z.string().default("anonymous"),
            id: z.number().default(0),
            node_id: z.string().default("0"),
            avatar_url: z
                .string()
                .url()
                .default("https://example.com/avatar.png"),
            gravatar_id: z.string().nullable().default(null),
            url: z.string().url().default("https://example.com"),
            html_url: z.string().url().default("https://example.com"),
            followers_url: z
                .string()
                .url()
                .default("https://example.com/followers"),
            following_url: z
                .string()
                .url()
                .default("https://example.com/following{/other_user}"),
            gists_url: z
                .string()
                .url()
                .default("https://example.com/gists{/gist_id}"),
            starred_url: z
                .string()
                .url()
                .default("https://example.com/starred{/owner}{/repo}"),
            subscriptions_url: z
                .string()
                .url()
                .default("https://example.com/subscriptions"),
            organizations_url: z
                .string()
                .url()
                .default("https://example.com/orgs"),
            repos_url: z.string().url().default("https://example.com/repos"),
            events_url: z
                .string()
                .url()
                .default("https://example.com/events{/privacy}"),
            received_events_url: z
                .string()
                .url()
                .default("https://example.com/received_events"),
            type: z.string().default("User"),
            site_admin: z.boolean().default(false),
        })
        .default({}),
    html_url: z.string().url().default("https://example.com/repo"),
    description: z.string().nullable().default(null),
    fork: z.boolean().default(false),
    url: z.string().url().default("https://example.com/api/repo"),
    forks_url: z.string().url().default("https://example.com/forks"),
    keys_url: z.string().url().default("https://example.com/keys{/key_id}"),
    collaborators_url: z
        .string()
        .url()
        .default("https://example.com/collaborators{/collaborator}"),
    teams_url: z.string().url().default("https://example.com/teams"),
    hooks_url: z.string().url().default("https://example.com/hooks"),
    issue_events_url: z
        .string()
        .url()
        .default("https://example.com/issues/events{/number}"),
    events_url: z.string().url().default("https://example.com/events"),
    assignees_url: z
        .string()
        .url()
        .default("https://example.com/assignees{/user}"),
    branches_url: z
        .string()
        .url()
        .default("https://example.com/branches{/branch}"),
    tags_url: z.string().url().default("https://example.com/tags"),
    blobs_url: z.string().url().default("https://example.com/blobs{/sha}"),
    git_tags_url: z
        .string()
        .url()
        .default("https://example.com/git/tags{/sha}"),
    git_refs_url: z
        .string()
        .url()
        .default("https://example.com/git/refs{/sha}"),
    trees_url: z.string().url().default("https://example.com/git/trees{/sha}"),
    statuses_url: z
        .string()
        .url()
        .default("https://example.com/statuses/{sha}"),
    languages_url: z.string().url().default("https://example.com/languages"),
    stargazers_url: z.string().url().default("https://example.com/stargazers"),
    contributors_url: z
        .string()
        .url()
        .default("https://example.com/contributors"),
    subscribers_url: z
        .string()
        .url()
        .default("https://example.com/subscribers"),
    subscription_url: z
        .string()
        .url()
        .default("https://example.com/subscription"),
    commits_url: z.string().url().default("https://example.com/commits{/sha}"),
    git_commits_url: z
        .string()
        .url()
        .default("https://example.com/git/commits{/sha}"),
    comments_url: z
        .string()
        .url()
        .default("https://example.com/comments{/number}"),
    issue_comment_url: z
        .string()
        .url()
        .default("https://example.com/issues/comments{/number}"),
    contents_url: z
        .string()
        .url()
        .default("https://example.com/contents/{+path}"),
    compare_url: z
        .string()
        .url()
        .default("https://example.com/compare/{base}...{head}"),
    merges_url: z.string().url().default("https://example.com/merges"),
    archive_url: z
        .string()
        .url()
        .default("https://example.com/{archive_format}{/ref}"),
    downloads_url: z.string().url().default("https://example.com/downloads"),
    issues_url: z.string().url().default("https://example.com/issues{/number}"),
    pulls_url: z.string().url().default("https://example.com/pulls{/number}"),
    milestones_url: z
        .string()
        .url()
        .default("https://example.com/milestones{/number}"),
    notifications_url: z
        .string()
        .url()
        .default("https://example.com/notifications{?since,all,participating}"),
    labels_url: z.string().url().default("https://example.com/labels{/name}"),
    releases_url: z.string().url().default("https://example.com/releases{/id}"),
    deployments_url: z
        .string()
        .url()
        .default("https://example.com/deployments"),
    created_at: z.string().datetime().default("1970-01-01T00:00:00Z"),
    updated_at: z.string().datetime().default("1970-01-01T00:00:00Z"),
    pushed_at: z.string().datetime().default("1970-01-01T00:00:00Z"),
    git_url: z.string().url().default("git://example.com/repo.git"),
    ssh_url: z.string().default("git@example.com:repo.git"),
    clone_url: z.string().url().default("https://example.com/repo.git"),
    svn_url: z.string().url().default("https://example.com/repo"),
    homepage: z.string().nullable().default(null),
    size: z.number().default(0),
    stargazers_count: z.number().default(0),
    watchers_count: z.number().default(0),
    language: z.string().nullable().default(null),
    has_issues: z.boolean().default(true),
    has_projects: z.boolean().default(true),
    has_downloads: z.boolean().default(true),
    has_wiki: z.boolean().default(true),
    has_pages: z.boolean().default(false),
    has_discussions: z.boolean().default(false),
    forks_count: z.number().default(0),
    mirror_url: z.string().url().nullable().default(null),
    archived: z.boolean().default(false),
    disabled: z.boolean().default(false),
    open_issues_count: z.number().default(0),
    license: z
        .object({
            key: z.string().default("mit"),
            name: z.string().default("MIT License"),
            spdx_id: z.string().default("MIT"),
            url: z.string().url().nullable().default(null),
            node_id: z.string().default("0"),
        })
        .nullable()
        .default(null),
    allow_forking: z.boolean().default(true),
    is_template: z.boolean().default(false),
    web_commit_signoff_required: z.boolean().default(false),
    topics: z.array(z.string()).default([]),
    visibility: z.string().default("public"),
    forks: z.number().default(0),
    open_issues: z.number().default(0),
    watchers: z.number().default(0),
    default_branch: z.string().default("main"),
    score: z.number().default(0),
})

export type RepositoryModel = z.infer<typeof repositoryDTOschema>

export type RepositoryKeysModel = keyof RepositoryModel

export const defaultRepositoryValues = repositoryDTOschema.parse({})

export type ResponceSchema = {
    items: RepositoryModel[]
    total_count: number
    incomplete_results: boolean
}

export type RequestParametrsModel = {
    per_page: number
    page: number
    q: string
}
