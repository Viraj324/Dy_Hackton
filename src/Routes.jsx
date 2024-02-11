import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from 'react-modal';



import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "pages/HomePage/home";
import NotFound from "pages/NotFound";

import Login from "pages/auth/Login";
import SignUp from "pages/auth/SignUp";
// import Club from "pages/clubs";
//import ClubInfo from "pages/clubs";
import AdminRoute from "components/RoleRoutes/AdminAuth";
import NormalUserRoute from "components/RoleRoutes/UserAuth";

import AdminPage from "pages/TeacherHead/teacherhead"
import StudentHeadPage from "pages/StudentHeadPage/studenthead";

import Calendar from "pages/Calendar"

import Club from "pages/clubs";
import Tech from "pages/Tech_events";
import Non_Tech from "pages/Non_Tech_events";

import Displayevent from "components/displaydb";


// import WomenPage from "pages/Public/WomenPage";
// import OpinionPage from "pages/Public/Opinion";
Modal.setAppElement('#root')


const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        


        <Route path="/clubs" element={<Club />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/non_tech" element={<Non_Tech />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoute />}>
          <Route path="display" element={<Displayevent />} />
         
        </Route>

        {/* Normal User Routes */}
        <Route path="/user/*" element={<NormalUserRoute />}>
          <Route path="calendar" element={<Calendar />} />
         
          
          
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
