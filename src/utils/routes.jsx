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

const routeElements = (
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolios" element={<Portfolios />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/getinvolved" element={<GetInvolvedPage />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/* Add more routes here */}
    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routeElements));
export default router;