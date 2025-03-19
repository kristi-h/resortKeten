import Landing from "./components/modules/Landing";
import Villa from "./components/pages/Villa";
import Book from "./components/pages/Book";
import Local from "./components/pages/Local";
import Story from "./components/pages/Story";
import {
  createBrowserRouter,
  BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import "./index.css";
import Header from "./components/ui/Header";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <BrowserRouter router={router}>
      <div className="w-screen overflow-x-hidden scroll-smooth">
        <Header />
        <Landing />
        <div id="villa">
          <Villa />
        </div>
        <div id="book">
          <Book />
        </div>
        <div id="local">
          <Local />
        </div>
        <div id="story">
          <Story />
        </div>
      </div>
    </BrowserRouter>
  );
}
