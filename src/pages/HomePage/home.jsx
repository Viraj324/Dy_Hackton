// import React from "react";
// import Navbarv from "components/navbar";
// import Carouselv from "components/caurosel";
// import Trendingevents from "components/events";
// import NewsletterSignup from "components/email";
// import Footer from "components/footer";
// import About from "components/about";
// import Public from "components/public"


// const HomePagePage = () => {
//   return (
//   <div style={{backgroundColor:"black"}}>
//     {<Navbarv /> }
//       {/* {<Carouselv />} */}
//       {<About />}
//       {<Trendingevents />}
//       {<Public />}
   
//       {<NewsletterSignup />}
//       {<Footer/>}
//     </div>


//   );
// };

// export default HomePagePage;


import React from "react";
import Navbarv from "components/navbar";
import Carouselv from "components/caurosel";
import Trendingevents from "components/events";
import NewsletterSignup from "components/email";
import Footer from "components/footer";
import About from "components/about";
import Public from "components/public";

import SocialIcons from "components/socialIcons"; // Import social icons component

const HomePagePage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbarv />
      <Carouselv />
      <About />
      <Trendingevents />
      <Public />
      <NewsletterSignup />
      
      <SocialIcons /> {/* Add social icons component */}
      <Footer />
    </div>
  );
};

export default HomePagePage;
