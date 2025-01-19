import { Layout } from "../layout"
import { Homepage } from "@pages/home-page"
import { ListPage } from "@pages/list-page"
import { createBrowserRouter } from "react-router-dom"
import { CreateRepositoryPage } from "@pages/create-repository-page"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: (
                <div>Oups... Cant find that page or somethins is broken</div>
            ),
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                },
                {
                    path: "/repositories",
                    element: <ListPage />,
                },
                {
                    path: "/create-repository",
                    element: <CreateRepositoryPage />,
                },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
)
