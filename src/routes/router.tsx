import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import Home from "../pages/Home";
import ProjectPage from "../pages/ProjectPage";
import CertificatePage from "../pages/CertificatePage";
import Certificates from "../pages/Certificates";
import NotFound from "../pages/NotFound";
import Footer from "../components/layout/Footer";
function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work/:slug",
        element: <ProjectPage />,
      },
      {
  path: "/certificates",
  element: <Certificates />,
},
      {
        path: "/certificates/:slug",
        element: <CertificatePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);