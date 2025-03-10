import { App } from "@/components/App";
import { LazyAbout } from "@/pages/admin/Admin.lazy";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/admin",
    element: <App/>,
    children: [
      {
        path: 'admin/main',
        element: <LazyAbout/>
      },
    ]
  },
]

export const router = createBrowserRouter(routes);

export default routes