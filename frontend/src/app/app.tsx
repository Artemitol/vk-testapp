import "./index.css"
import { ConfigProvider, theme } from "antd"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { router } from "./router/router"
import { store } from "./store/store"

export function App() {
    const prefersDarkTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

    return (
        <ConfigProvider
            theme={{
                algorithm: prefersDarkTheme
                    ? theme.darkAlgorithm
                    : theme.compactAlgorithm,
            }}
        >
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </ConfigProvider>
    )
}
