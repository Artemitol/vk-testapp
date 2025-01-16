import { Layout } from "../layout"
import { Homepage } from "@pages/home-page"
import { ListPage } from "@pages/list-page"
import { createBrowserRouter } from "react-router-dom"

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
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
)
