import { RouteObject } from "react-router-dom";

import { Home, Category, Join, Login, Promotion, Root } from "../pages";
import { userPages } from "../pages/user";
import { accountPages } from "../pages/user/account";

const { Account, ChangePass, CloseAccount, EditProfile } = accountPages;
const { Photos, Likes, Collections, CollectionById, ProfileRoot } = userPages;

export const core: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories/:category",
        element: <Category />,
      },
    ],
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "advertise",
    element: <Promotion />,
  },
  {
    path: "/:userName",
    element: <ProfileRoot />,
    children: [
      {
        index: true,
        element: <Photos />,
      },
      {
        path: "likes",
        element: <Likes />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
    ],
  },
  {
    path: "collections/:collectionId",
    element: <CollectionById />,
  },

  {
    path: "/account",
    element: <Account />,
    children: [
      {
        index: true,
        element: <EditProfile />,
      },
      {
        path: "password",
        element: <ChangePass />,
      },
      {
        path: "close",
        element: <CloseAccount />,
      },
    ],
  },
];
