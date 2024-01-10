import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/Error-Page";
import MemoryGame from "../Page/MemoryGame"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "memory-game",
            element: <MemoryGame />
        },
    ]);
    return <RouterProvider router={router} />
}
 
export default Router;