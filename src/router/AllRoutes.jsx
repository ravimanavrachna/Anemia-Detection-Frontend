import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import ViewPatient from '../pages/viewPatient/ViewPatient';
import AddPatient from '../pages/addPatient/AddPatient';
import PatientDetail from '../pages/patientDetail/PatientDetail';

// Function to check token security
const isAuthenticated = () => {
  const token = sessionStorage.getItem('authToken'); // Or wherever you're storing the token
  return !!token; // Returns true if token exists, otherwise false
};

// PrivateRoute Component for protected routes
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donor/view-donor" element={<ViewPatient />} />
      <Route path="/donor/add-donor" element={<AddPatient/>} />
      <Route path="/donor/patient-detail" element={<PatientDetail/>} />






      {/* <Route path="/page1" element={<PrivateRoute element={<Page2 />} />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/admin/add-admin" element={<PrivateRoute element={<AddAdmin />} />} />
      <Route path="/patient/add-patient" element={<PrivateRoute element={<AddPatient />} />} />
      <Route path="/dashboard/patients" element={<PrivateRoute element={<PatientDashboard />} />} />
      <Route path="/dashboard/patient-details/:id" element={<PrivateRoute element={<PatientDetails />} />} />
      <Route path="/dashboard/patient/upload-mcp-card/:id" element={<PrivateRoute element={<PatientMCPCardUpload />} />} />

      <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default AllRoutes;
