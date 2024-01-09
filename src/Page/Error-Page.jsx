import {Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return ( 
        <div id="error-page">
            <Link to="/">Home</Link>
            <p>An unexpected error has occurred</p>
            <i>{error.statusText || error.message}</i>
        </div>
     );
}
 
export default ErrorPage;