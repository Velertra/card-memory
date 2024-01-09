import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/Error-Page";
import HomePage from "../Page/HomePage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "dash",
            element: <HomePage />
        },
    ]);
    return <RouterProvider router={router} />
}
 
export default Router;