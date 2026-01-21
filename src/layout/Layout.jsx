import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-stone-100">

            <header className="bg-emerald-900 text-amber-50 shadow-lg">
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-bold tracking-wide text-orange-400">
                        🌲 American Nature Parks
                    </h1>
                    <div className="flex gap-6">
                        <Link to={`/`} className="italic p-4 hover:text-orange-400 transition font-bold">Home</Link>
                        <Link to={`/natureParks`}
                              className="italic hover:text-orange-400 p-4 font-bold">Parks</Link>
                        <Link to={`/create`}
                              className="italic hover:text-orange-400 transition p-4 font-bold">Create</Link>
                    </div>

                </nav>
            </header>
            {/*<div className="mx-auto max-w-7xl ">*/}
            <main className=" flex-grow mx-2">
                <Outlet/>
            </main>
            {/*</div>*/}
            <footer
                className="bg-stone-800 text-amber-50 text-center py-4 mt-10">&copy; {new Date().getFullYear()} Eline
                🌄
            </footer>

        </div>
    );
}

export default Layout;