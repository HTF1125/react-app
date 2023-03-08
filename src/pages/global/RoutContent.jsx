import routeContent from "../../routes";
import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      {Object.keys(routeContent).map((subcategory) => (
        <Route
          path={routeContent[subcategory].to}
          element={
            routeContent[subcategory].page
              ? routeContent[subcategory].page
              : null
          }
        />
      ))}
    </Routes>
  );
}
