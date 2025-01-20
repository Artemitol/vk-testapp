import { Layout } from "../layout"
import { Homepage } from "@pages/home-page"
import { ListPage } from "@pages/list-page"
import { createBrowserRouter } from "react-router-dom"
import { CreateRepositoryPage } from "@pages/create-repository-page"
import { Spin } from "antd"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: (
                <div>
                    Oups... Cant find that page or something is broken
                    <Spin />
                </div>
            ),
            children: [
                {
                    path: "/",
                    element: <Homepage />,
                    errorElement: (
                        <div>
                            Cant open homepage now
                            <Spin />
                        </div>
                    ),
                },
                {
                    path: "/repositories",
                    element: <ListPage />,
                    errorElement: (
                        <div>
                            Something went wrong on repositories page....
                            <Spin />
                        </div>
                    ),
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
