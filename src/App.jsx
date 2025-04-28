import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Landing from "./components/modules/Landing";
import Villa from "./components/pages/Villa";
import Book from "./components/pages/Book";
import Local from "./components/pages/Local";
import Story from "./components/pages/Story";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import "./index.css";

function SharedLayout() {
  return (
    <div className="w-screen overflow-x-hidden scroll-smooth bg-primary text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white p-8">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <a
        href="/"
        className="text-lg text-yellow-400 underline hover:text-yellow-300 transition"
      >
        Go back home
      </a>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "villa", element: <Villa /> },
      { path: "book", element: <Book /> },
      { path: "local", element: <Local /> },
      { path: "story", element: <Story /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
