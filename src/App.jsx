import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Explore from "./pages/Explore";
import Rootpage from "./pages/Rootpage";
import Post from "./pages/Post";
import Login from "./pages/Login";
import PostDe from "./pages/PostDe";
import { PrivateRoute } from "./pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <PrivateRoute>
        <Rootpage />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <CreatePost />,
      },
      {
        path: "post/:postId",
        element: <PostDe />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
