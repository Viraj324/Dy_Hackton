import React from 'react';
import ss from './HomePage/club_info';
import Navbar from 'components/navbar';
import 'pages/clubs.css'
import sss from 'assets/cr_img/football.png'
import Footer from "components/footer";
import insta1 from 'assets/cr_img/insta1.png';
import link1 from 'assets/cr_img/linkd1.png';
// import AnimatedBackground1 from './Animated_Background';
function CollageClubInfo() {
  return (
    <div style={{backgroundColor: "#0c0c0c"}}>
      <Navbar/>
      
      {/* <AnimatedBackground1/> */}
      {/* <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px 0' }}> */}
        <div className='heading'>
        <h1>Collage Club Information</h1>
        </div>
      {/* </header> */}

      <div style={{ maxWidth: '100%', marginLeft:'10%',marginRight:'10%', padding: '14 20px', display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: '1' }}>
          <h2 style={{color:"rgb(163, 67, 2)"}}>About Us</h2>
          <p style={{color:"white"}}>Welcome to our collage club! We are a group of passionate individuals who love creating beautiful collages. Whether you're a beginner or an experienced collage artist, everyone is welcome to join us.</p>
          
          <h2 style={{color:"rgb(163, 67, 2)"}}>Activities</h2>
          <p style={{color:"white"}}>Our club organizes regular collage-making workshops, where members can learn new techniques and share their ideas with each other. We also host exhibitions to showcase our creations to the wider community.</p>
          
          <h2 style={{color:"rgb(163, 67, 2)"}}>Membership</h2>
          <p style={{color:"white"}}>Becoming a member of our collage club is easy! Simply fill out the membership form on our website and pay the annual dues. Membership benefits include access to all club events and workshops, as well as discounts on art supplies.</p>
          
          <h2 style={{color:"rgb(163, 67, 2)"}}>Contact Us</h2>
          <p style={{color:"white"}}>If you have any questions or would like to learn more about our collage club, feel free to reach out to us at <a href="mailto:collageclub@example.com">collageclub@example.com</a>.</p>
        </div>
        <div style={{ flex: '1' }}>
          <img src={sss} alt="Collage Club" style={{ maxWidth: '700px', height: '500px' }} />
        </div>
      </div>
      <ss/>
      <div className="social-links" style={{display:'flex',marginLeft:"50%",padding:"10px"}}>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={insta1} alt=""  style={{height:"30px",width:"30px",marginRight:"10px"}}/>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={link1} alt="" style={{height:"30px",width:"30px"}}/>
      </a>
 
</div>

      {<Footer/>}
    </div>
  );
}

export default CollageClubInfo;