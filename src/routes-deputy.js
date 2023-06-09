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

import Index from "views/student/Index.js";
import Profile from "views/student/Profile.js";
import Account from "views/student/Account.js";
import Register from "views/student/Register.js";
import Login from "views/student/Login.js";
import Payment from "views/student/Payment.js";
import Icons from "views/student/History.js";
import BillExchange from "views/admin/BillExchange";
import BillOfExchange from "views/student/BillOfExchange";
import Tables from "views/admin/Tables";
import Maps from "views/admin/Maps";
import Classes from "views/admin/Classes";
import StudentData from "views/admin/StudentData";
import Diploma from "views/admin/Diploma";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/deputy",
  },
  {
    path: "/studentList",
    name: "studentList",
    icon: "ni ni-planet text-blue",
    component: <Tables />,
    layout: "/deputy",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-planet text-blue",
    component: <Classes />,
    layout: "/deputy",
  },
  {
    path: "/diploma",
    name: "studentData",
    icon: "ni ni-planet text-blue",
    component: <Diploma />,
    layout: "/deputy",
  }
];

export default routes;
