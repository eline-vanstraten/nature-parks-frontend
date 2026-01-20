import {createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";

import NatureParks from "./pages/NatureParks.jsx";
import NatureParkDetail from "./pages/NatureParkDetail.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import EditForm from "./pages/EditForm.jsx";


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
            }

        ]
    },
])

function App() {

    return <RouterProvider router={router}/>


}

export default App
