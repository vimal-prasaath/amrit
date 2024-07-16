import { createBrowserRouter } from "react-router-dom";
import {
  Main,
  Home,
  EyeCareDetails,
  EyeCareInternal,
  Blog,
  ContactUs,
} from "views";

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
      {
        path: "our-doctor",
        element: <EyeCareInternal doctorView />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
