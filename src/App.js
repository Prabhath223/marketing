import React from 'react';
import NavBar from './MyComps/Nav';
import MyHome from './MyComps/Home';
import MyServices from './MyComps/Services';
import MyProjects from './MyComps/Projects';
import './MyComps/nav.css'
import MyAboutUs from './MyComps/AboutUs';
import MyCta from './MyComps/cta';
import MyBlog from './MyComps/Blog';
import MyContactUs from './MyComps/ContactUs';
import MyFooter from './MyComps/Footer';
import MyTop from './MyComps/Top';
function App() {
  return (
    <div>
      <NavBar />
      <MyHome/>
      <MyServices/>
      <MyProjects/>
      <MyAboutUs/>
      <MyCta/>
      <MyBlog/>
      <MyContactUs/>
      <MyFooter/>
      <MyTop/>
      
    </div>
  );
}

export default App;
