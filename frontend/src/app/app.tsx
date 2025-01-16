import { RouterProvider } from "react-router-dom"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { router } from "./router/router"

export function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    )
}
