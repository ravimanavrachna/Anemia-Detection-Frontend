import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import ViewPatient from '../pages/viewPatient/ViewPatient';
import AddPatient from '../pages/addPatient/AddPatient';
import PatientDetail from '../pages/patientDetail/PatientDetail';
import Otp from '../pages/auth/otp/Otp';
import StepOne from '../pages/addPatient/StepOne';
import StepTwo from '../pages/addPatient/StepTwo';
import StepThree from '../pages/addPatient/StepThree';
import ApprovedPage from '../pages/admin/aprovePage/ApprovedPage';
import BlockPage from '../pages/admin/blockPage/BlockPage';
import AdminDashboard from '../pages/admin/adminDashboard/AdminDashboard';
import BlockPageDetails from '../pages/admin/blockPage/BlockPageDetails';

// Function to check token security
const isAuthenticated = () => {
  const token = sessionStorage.getItem('authToken');
  return !!token;
};

// PrivateRoute Component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />


      {/* Protected Routes */}
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard />} />} />
      <Route path="/admin/approval" element={<PrivateRoute element={<ApprovedPage />} />} />
      <Route path="/admin/block" element={<PrivateRoute element={<BlockPage />} />} />
      <Route path="/admin/block/123" element={<PrivateRoute element={<BlockPageDetails />} />} />


      <Route path="/donor/all-donor" element={<PrivateRoute element={<ViewPatient />} />} />
      <Route path="/donor/add-donor" element={<PrivateRoute element={<AddPatient />} />} />
      <Route path="/donor/donor-detail/:donorID" element={<PrivateRoute element={<PatientDetail />} />} />
      <Route path="/setting" element={<PrivateRoute element={<PatientDetail />} />} />
      <Route path="/donor/add-donor/upload-palm-image" element={<PrivateRoute element={<StepOne />} />} />
      <Route path="/donor/add-donor/upload-conjunctiva-image" element={<PrivateRoute element={<StepTwo />} />} />
      <Route path="/donor/add-donor/upload-nailbde-image" element={<PrivateRoute element={<StepThree />} />} />
      <Route path="/donor/add-donor" element={<PrivateRoute element={<AddPatient />} />} />


    


      {/* Catch-all route to redirect unauthenticated users */}
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default AllRoutes;
