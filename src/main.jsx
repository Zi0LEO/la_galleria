import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import PicPage from "./pages/PicPage";

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
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
