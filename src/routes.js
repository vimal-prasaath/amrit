import { createBrowserRouter } from "react-router-dom";
import { Main, Home, EyeCareDetails } from "views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "eyecare",
        element: <EyeCareDetails />,
      },
    ],
  },
]);

export default router;
