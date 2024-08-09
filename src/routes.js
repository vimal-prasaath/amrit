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
  DERMA: "dermatology",
  INTERNAL_MEDICINE: "internalMedicine",
  DIBETOLOGY: "diabetology",
  GEN_SURGERY: "generalSurgery",
  ENT: "ent",
  CARDIO: "cardiology",
  NEPHRO: "nephrology",
  NEURO: "neurology",
  PHYSIO: "physiotherapy",
  GASTRO: "gastroenterology",
  RADIO: "radiology",
  CC: "criticalCare",
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
