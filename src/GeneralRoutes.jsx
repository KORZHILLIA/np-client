import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"));
const OutletsPage = lazy(() => import("./pages/OutletsPage"));
const GeneralRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/outlets" element={<OutletsPage />} />
      </Routes>
    </Suspense>
  );
};

export default GeneralRoutes;
