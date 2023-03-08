import routeContent from "../../routes";
import { Routes, Route } from "react-router-dom";


export function AppRoutes() {
  return (
    <Routes>
      {Object.keys(routeContent).map((category) => (
        <>
          {Object.keys(routeContent[category]).map((subcategory) => (
            <Route
              path={routeContent[category][subcategory].to}
              element={
                routeContent[category][subcategory].page
                  ? routeContent[category][subcategory].page
                  : null
              }
            />
          ))}
        </>
      ))}
    </Routes>
  );
}
