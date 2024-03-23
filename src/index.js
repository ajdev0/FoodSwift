import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./components/utils/appRouter";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
