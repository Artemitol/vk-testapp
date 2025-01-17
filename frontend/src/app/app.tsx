import { RouterProvider } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { router } from "./router/router"
import { ConfigProvider, theme } from "antd"

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
