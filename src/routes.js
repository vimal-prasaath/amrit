import { createBrowserRouter } from "react-router-dom";
import { Main, Home, EyeCareDetails, EyeCareInternal } from "views";

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
      {
        path: "eyecare-internal",
        element: <EyeCareInternal />,
      },
    ],
  },
]);

export default router;
