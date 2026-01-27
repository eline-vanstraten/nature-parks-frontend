import {Link} from "react-router";

function NotFound() {
    return (
        <div className="not-found p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-6">The page you are looking for does not exist</p>
            <Link to="/" className="underline text-emerald-700 hover:text-emerald-900">Go back to home</Link>
        </div>
    )
}

export default NotFound