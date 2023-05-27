import React from 'react';
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from '../components/RootLayout';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import Portfolios from '../pages/PortfoliosPage';
import ContactUs from '../pages/ContactUsPage';
import Login from '../pages/LoginPage';
import Register from '../pages/RegisterPage';
import NotFound from '../pages/NotFoundPage';
import ProfilePage from '../pages/ProfilePage';
import GetInvolvedPage from '../pages/GetInvolvedPage';
import ErrorPage from '../pages/ErrorPage';
import LoadingPage from '../pages/LoadingPage';
import RequestsHome from '../pages/Requests';
import CreateRequest from '../pages/Requests/CreateRequest';
import AdminDashboardLayout from '../components/AdminDashboardLayout';
import AdminHome from '../pages/Admin';
import AdminManage from '../pages/Admin/Manage';
import CAPEPage from '../pages/CAPEPage';
import ResourcesPage from '../pages/ResourcesPage';
import MessagePage from '../Pages/MessagePage';


const routeElements = (
  <>
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolios" element={<Portfolios />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/getinvolved" element={<GetInvolvedPage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/request" element={<RequestsHome />} />
      <Route path="/request/create" element={<CreateRequest />} />
      <Route path="/resources/cape" element={<CAPEPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      {/* Add more routes here */}
      <Route path='/message' element={<MessagePage/>}/>
      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="manage" element={<AdminManage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routeElements));
export default router;
