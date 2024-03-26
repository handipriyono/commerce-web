import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import DetailPages from "../pages/details";
import Login from "../pages/login";
import Profiles from "../pages/profiles/index";
import ProtectedRoute from "./protectedRoute";

const RouteList = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPages />} />
            <Route path="/profile" element={<Profiles />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RouteList;
