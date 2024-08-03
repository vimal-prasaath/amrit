import { createBrowserRouter } from "react-router-dom";
import {
  Main,
  Home,
  EyeCareDetails,
  EyeCareInternal,
  Blog,
  ContactUs,
} from "views";

export const departmentConstants = {
  OPTHOMOLOGY: "opthomology",
  ORTHO: "ortho",
  PEDIATRICS: "pediatrics",
  GYNO: "gyno",
};

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
        path: "department/:departmentId",
        element: <EyeCareDetails />,
      },
      {
        path: "department-internal/:departId/:id",
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
