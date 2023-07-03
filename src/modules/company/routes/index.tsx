import { RouteObject } from "react-router-dom";
import { Root } from "../layouts/Root";
import { Error } from "@/pages";
import {
  About,
  ContactUs,
  History,
  JoinTheTeam,
  Press,
  HelpCenter,
} from "../pages";

export const company: RouteObject[] = [
  {
    path: "company",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "jointheteam",
        element: <JoinTheTeam />,
      },
      {
        path: "press",
        element: <Press />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "helpcenter",
        element: <HelpCenter />,
      },
    ],
  },
];
