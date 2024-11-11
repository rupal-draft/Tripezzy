import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Loader from "./components/loading/loading";
import Home from "./pages/home/home";
import NotFound from "./pages/404/404";
import Destination from "./pages/destination/destination";
import TourPackage from "./pages/packages/package";
import PackageDetail from "./pages/package-detail";
import PackageOffers from "./pages/package-offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div id="page" className="full-page">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/destination", element: <Destination /> },
      { path: "/tour-packages", element: <TourPackage /> },
      { path: "/package-detail", element: <PackageDetail /> },
      { path: "/package-offer", element: <PackageOffers /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
        <ToastContainer />
        <RouterProvider router={router} />
      </SkeletonTheme>
    </Suspense>
  );
}

export default App;
