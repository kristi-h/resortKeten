import Landing from "./components/modules/Landing";
import Villa from "./components/pages/Villa";
import Book from "./components/pages/Book";
import Local from "./components/pages/Local";
import Story from "./components/pages/Story";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
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
      <div className="container">
        <div className="bg-none">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/villa" element={<Villa />} />
              <Route path="/book" element={<Book />} />
              <Route path="/local" element={<Local />} />
              <Route path="/story" element={<Story />} />
            </Routes>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div>
      </div>
    </BrowserRouter>
  );
}
