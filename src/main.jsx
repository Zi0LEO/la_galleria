import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PicPage from "./pages/PicPage";
import PersonalPage from "./pages/Personal";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
      {
        path:"/*",
        element: <ErrorPage />,
      },
			{
				path: "/explore",
				children: [
					{
						path: "",
						element: <Explore />,
					},
					{
						path: ":id",
						element: <PicPage />,
					},
				],
			},
			{
				path: "/personal",
				element: <PersonalPage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
