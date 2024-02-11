import React from "react";

const SocialIcons = () => {
  return (
    <section className="bg-dark py-4">
      <div className="container text-center">
        <h3 className="text-light mb-3">Follow Us</h3>
        <div>
          <a href="#!" className="text-light mr-3">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#!" className="text-light mr-3">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#!" className="text-light mr-3">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#!" className="text-light mr-3">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;
