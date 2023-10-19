import { RouteObject } from "react-router-dom";
import { Root, Render } from "../pages";

const contentPath = "../src/modules/tos/content";
const pages = [
  {
    path: "license",
    queryKey: ["license"],
    filePath: `${contentPath}/_license.md`,
  },
  {
    path: "privacy",
    queryKey: ["privacy"],
    filePath: `${contentPath}/_privacy.md`,
  },
];

const renderPages = pages.map(({ path, queryKey, filePath }) => ({
  path,
  element: <Render queryKey={queryKey} filePath={filePath} />,
}));

export const tos: RouteObject[] = [
  {
    path: "tos",
    element: <Root />,
    children: [...renderPages],
  },
];
