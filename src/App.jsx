import {createBrowserRouter, Link, RouterProvider} from "react-router";
import './index.css'
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";

import NatureParks from "./pages/NatureParks.jsx";
import NatureParkDetail from "./pages/NatureParkDetail.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import EditForm from "./pages/EditForm.jsx";
import NotFound from "./pages/NotFound.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/natureParks',
                element: <NatureParks/>,
            },
            {
                path: '/natureParks/:id',
                element: <NatureParkDetail/>,
            },
            {
                path: '/create',
                element: <CreateForm/>,
            },
            {
                path: '/edit/:id',
                element: <EditForm/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            }

        ]
    },
])

function App() {

    return <RouterProvider router={router}/>


}


export default App
