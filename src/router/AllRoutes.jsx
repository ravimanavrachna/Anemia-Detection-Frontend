import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import ViewPatient from "../pages/viewPatient/ViewPatient";
import AddPatient from "../pages/addPatient/AddPatient";
import PatientDetail from "../pages/patientDetail/PatientDetail";
import Otp from "../pages/auth/otp/Otp";
import StepOne from "../pages/addPatient/StepOne";
import StepTwo from "../pages/addPatient/StepTwo";
import StepThree from "../pages/addPatient/StepThree";
import ApprovedPage from "../pages/admin/aprovePage/ApprovedPage";
import BlockPage from "../pages/admin/blockPage/BlockPage";
import AdminDashboard from "../pages/admin/adminDashboard/AdminDashboard";
import BlockPageDetails from "../pages/admin/blockPage/BlockPageDetails";
import ProfilePage from "../pages/profile/ProfilePage";
import useGet from "../hooks/useGet";
import Unauthorized from "../componants/Unauthorized";

const isAuthenticated = () => {
  const token = sessionStorage.getItem("authToken");
  return !!token;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const RoleBasedRoute = ({ element, allowedUserTypes }) => {
  const { data, loading } = useGet("api/doctor/profile");

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || !allowedUserTypes.includes(data.userType)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} />}
      />
      <Route
        path="/admin/dashboard"
        element={<PrivateRoute element={<AdminDashboard />} />}
      />
      <Route
        path="/admin/approval"
        element={<PrivateRoute element={<ApprovedPage />} />}
      />
      <Route
        path="/admin/block"
        element={<PrivateRoute element={<BlockPage />} />}
      />
      <Route
        path="/admin/block/:doctorID"
        element={<PrivateRoute element={<BlockPageDetails />} />}
      />

      <Route
        path="/dashboard"
        element={
          <RoleBasedRoute element={<Dashboard />} allowedUserTypes={["2"]} />
        }
      />
      <Route
        path="/donor/add-donor"
        element={
          <RoleBasedRoute element={<AddPatient />} allowedUserTypes={["2"]} />
        }
      />
      <Route
        path="/donor/add-donor/upload-palm-image"
        element={
          <RoleBasedRoute element={<StepOne />} allowedUserTypes={["2"]} />
        }
      />
      <Route
        path="/donor/add-donor/upload-conjunctiva-image"
        element={
          <RoleBasedRoute element={<StepTwo />} allowedUserTypes={["2"]} />
        }
      />
      <Route
        path="/donor/add-donor/upload-nailbde-image"
        element={
          <RoleBasedRoute element={<StepThree />} allowedUserTypes={["2"]} />
        }
      />

      <Route
        path="/donor/all-donor"
        element={<PrivateRoute element={<ViewPatient />} />}
      />
      <Route
        path="/donor/donor-detail/:donorId"
        element={<PrivateRoute element={<PatientDetail />} />}
      />
      <Route
        path="/setting"
        element={<PrivateRoute element={<PatientDetail />} />}
      />
      <Route
        path="/profile"
        element={<PrivateRoute element={<ProfilePage />} />}
      />

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AllRoutes;
