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
import Loading from '../Pages/Loading/Loading';
import Links from '../Pages/Links/Links';

const routeElements = (
  <>
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<Loading />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routeElements));
export default router;
