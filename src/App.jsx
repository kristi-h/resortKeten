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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
