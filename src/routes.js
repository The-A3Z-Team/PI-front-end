/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Index from "views/Index.js";
import Profile from "views/admin/Profile.js";
import Maps from "views/admin/Maps.js";
import Register from "views/admin/Register.js";
import Login from "views/admin/Login.js";
import Tables from "views/admin/Tables.js";
import Classes from "views/admin/Classes.js";
import BillExchange from "views/admin/BillExchange";
import BillExchangeDetails from "views/admin/BillExchangeDetails";
import StudentData from "views/admin/StudentData";
import Diploma from "views/admin/Diploma";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-planet text-blue",
    component: <Classes />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/bill-exchange",
    name: "Bill Exchange",
    icon: "ni ni-pin-3 text-orange",
    component: <BillExchange />,
    layout: "/admin",
  },
  {
    path: "/billexhangedetails",
    name: "exchange details",
    icon: "ni ni-pin-3 text-orange",
    component: <BillExchangeDetails />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/studentData",
    name: "StudentData",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentData />,
    layout: "/admin",
  },
  {
    path: "/diploma",
    name: "Diplima",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Diploma />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  }
];
export default routes;
