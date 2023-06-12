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
import Tables from "views/admin/Tables";
import Classes from "views/admin/Classes";
import Diploma from "views/general-director/Diploma";

var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: <Index />,
  //   layout: "/director",
  // },
  {
    path: "/studentList",
    name: "students",
    icon: "fa-sharp fa-solid fa-graduation-cap text-blue",
    component: <Tables />,
    layout: "/director",
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "fa-solid fa-link text-yellow",
    component: <Classes />,
    layout: "/director",
  },
  {
    path: "/Diploma",
    name: "Eligible Students",
    icon: "fa-sharp fa-solid fa-user-graduate",
    component: <Diploma />,
    layout: "/director",
  }
];

export default routes;
